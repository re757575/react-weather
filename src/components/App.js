import React, { Component, PropTypes } from 'react';
import Title from 'react-title-component';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import withWidth, { MEDIUM, LARGE } from 'material-ui/utils/withWidth';
import { version as AppVersion } from '../../package.json';
import ConnectionStatus from './ConnectionStatus';
import AppNavDrawer from './AppNavDrawer';

class App extends Component {

  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    width: PropTypes.number.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  static childContextTypes = {
    muiTheme: PropTypes.object,
  };

  state = {
    aboutOpen: false,
    navDrawerOpen: false,
    appLoading: true
  };

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  }

  componentWillMount() {
    this.setState({
      muiTheme: getMuiTheme(),
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ appLoading: false });
    }, 1000);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({
      muiTheme: newMuiTheme,
    });
  }

  getStyles() {
    const styles = {
      appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        zIndex: this.state.muiTheme.zIndex.appBar + 1,
        top: 0,
      },
      root: {
        paddingTop: spacing.desktopKeylineIncrement,
        minHeight: 400,
      },
      content: {
        margin: spacing.desktopGutter,
      },
      contentWhenMedium: {
        margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`,
      },
      floatingActionBtn: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed'
      },
    };

    if (this.props.width === MEDIUM || this.props.width === LARGE) {
      styles.content = Object.assign(styles.content, styles.contentWhenMedium);
    }

    return styles;
  }

  handleOpenAbout = () => {
    this.setState({
      aboutOpen: true
    });
  };

  handleCloseAbout = () => {
    this.setState({
      aboutOpen: false
    });
  };

  handleTouchTapLeftIconButton = () => {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  };

  handleChangeRequestNavDrawer = (open) => {
    this.setState({
      navDrawerOpen: open,
    });
  };

  handleChangeList = (event, value) => { // eslint-disable-line no-unused-vars
    this.setState({
      navDrawerOpen: false,
    });
  };

  handleChangeMuiTheme = (muiTheme) => {
    this.setState({
      muiTheme,
    });
  };

  render() {
    const appTitle = 'React Weather';

    const {
      location,
      children,
    } = this.props;

    let {
      navDrawerOpen,
    } = this.state;

    const {
      prepareStyles,
    } = this.state.muiTheme;

    let docked = false;
    let showMenuIconButton = true;

    const styles = this.getStyles();
    const router = this.context.router;
    const title =
          router.isActive('/index') ? 'index' :
          router.isActive('/page2') ? 'Page2' : '';

    if (this.props.width === LARGE && title !== '') {
      docked = true;
      navDrawerOpen = true;
      showMenuIconButton = false;

      styles.navDrawer = {
        zIndex: styles.appBar.zIndex - 1,
      };
      styles.root.paddingLeft = 256;
    }

    const optionsList = () => (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="重新整理" onTouchTap={() => window.location.reload()} />
        <MenuItem primaryText="關於" onTouchTap={this.handleOpenAbout} />
      </IconMenu>
    );

    const dialogActions = [
      <FlatButton
        label="關閉"
        primary
        onTouchTap={this.handleCloseAbout}
      />,
    ];

    return (
      <div>
        <Title render={`${appTitle} - ${title}`} />
        <AppBar
          style={styles.appBar}
          title={title}
          iconElementRight={optionsList()}
          onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
          showMenuIconButton={showMenuIconButton}
        />
        {title !== '' ?
          <div style={prepareStyles(styles.root)}>
            <div style={prepareStyles(styles.content)} className={this.state.appLoading ? 'hidden' : 'faded'} >
              {React.cloneElement(children, {
                onChangeMuiTheme: this.handleChangeMuiTheme,
              })}
            </div>
            <CircularProgress
              size={80}
              style={this.state.appLoading ? { position: 'absolute' } : { display: 'none' }}
              className="center"
            />
          </div> :
          children
        }
        <FloatingActionButton
          style={styles.floatingActionBtn}
          secondary
          onTouchTap={() => console.log('FloatingActionButton')}
        >
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title={`${appTitle} ${AppVersion}`}
          actions={dialogActions}
          modal={false}
          open={this.state.aboutOpen}
          onRequestClose={this.handleCloseAbout}
        >
          <span>React + Redux + WebPack + Material UI</span>
        </Dialog>
        <AppNavDrawer
          style={{}}
          location={location}
          docked={docked}
          onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}
          onChangeList={this.handleChangeList}
          open={navDrawerOpen}
        />
        <ConnectionStatus />
      </div>
    );
  }
}

export default withWidth()(App);
