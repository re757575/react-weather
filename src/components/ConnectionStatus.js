import React, {Component} from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      clickedClose: false,
      intervalId: null
    }
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      if (!navigator.onLine && !this.state.open && !this.state.clickedClose) {
        this.handleOpen();
      }
      if (navigator.onLine && this.state.open) {
        this.handleRequestClose();
      }
    }, 1000);

    this.setState({intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  handleOpen = () => {
    this.setState({open: true});

  };

  handleActionTouchTap = () => {
    this.setState({
      open: false,
      clickedClose: true,
    });
  }

  handleReload = () => {
    location.reload()
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
      clickedClose: true,
    });
  };

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message="網路連線已斷開"
          action="close"
          autoHideDuration={4000}
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

const mapStatsToProps = (state) => {
  return {
    isOffline: state.system.isOffline     
  }
}

export default connect(mapStatsToProps, null)(ConnectionStatus);
