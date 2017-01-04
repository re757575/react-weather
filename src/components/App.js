import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SelectCityList from '../containers/SelectCityListContainer';
import Weather from '../containers/WeatherContainer';
import Forecast from '../containers/ForecastContainer';
import FeachBtn from './FeachBtn';
import Dialog from 'material-ui/Dialog';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const fabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

class App extends Component {

  state = {
    aboutOpen: false,
  };

  handleOpenAbout = () => {
    this.setState({aboutOpen: true});
  };

  handleCloseAbout = () => {
    this.setState({aboutOpen: false});
  };

  render() {

    const appTitle = 'React Weather';

    const optionsList = () => (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="重新整理" onTouchTap={() => location.reload()} />
        <MenuItem primaryText="關於" onTouchTap={this.handleOpenAbout} />
      </IconMenu>
    );

    const dialogActions = [
      <FlatButton
        label="關閉"
        primary={true}
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
            <SelectCityList/>
            <FeachBtn/>
            <Weather/>
            <Forecast/>
          </div>
          <FloatingActionButton
            style={fabStyle}
            secondary={true}
            onTouchTap={() => console.log('FloatingActionButton')}
          >
            <ContentAdd/>
          </FloatingActionButton>
          <Dialog
            title={`關於 ${appTitle}`}
            actions={dialogActions}
            modal={false}
            open={this.state.aboutOpen}
            onRequestClose={this.handleCloseAbout}
          >
            <span>React + Redux + WebPack + Material UI</span>
          </Dialog>
        </div>
    );
  }
}

export default App;
