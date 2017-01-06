import React, { Component } from 'react';
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

import { version as AppVersion } from '../../package.json';
import ConnectionStatus from './ConnectionStatus';
import SelectCityList from '../containers/SelectCityListContainer';
import Weather from '../containers/WeatherContainer';
import Forecast from '../containers/ForecastContainer';
import FeachBtn from './FeachBtn'; // eslint-disable-line import/no-named-as-default

const fabStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

class App extends Component {

  state = {
    aboutOpen: false,
    appLoading: true
  };

  componentWillMount() {
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ appLoading: false });
    }, 500);
  }

  handleOpenAbout = () => {
    this.setState({ aboutOpen: true });
  };

  handleCloseAbout = () => {
    this.setState({ aboutOpen: false });
  };

  render() {
    const appTitle = 'React Weather';

    const optionsList = () => (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="重新整理" onTouchTap={() => location.reload()} />
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
        <AppBar
          title={appTitle}
          iconElementRight={optionsList()}
        />
        <div id="container">
          <div className={this.state.appLoading ? 'hidden' : 'faded'}>
            <SelectCityList />
            <FeachBtn />
            <Weather />
            <Forecast />
          </div>
          <CircularProgress
            size={80}
            style={this.state.appLoading ? { position: 'absolute' } : { display: 'none' }}
            className="center"
          />
        </div>
        <FloatingActionButton
          style={fabStyle}
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
        <ConnectionStatus />
      </div>
    );
  }
}

export default App;
