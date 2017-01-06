import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      clickedClose: false,
      intervalId: null
    };
  }

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
  // https://github.com/airbnb/javascript/issues/684#issuecomment-264094930
  componentWillMount() {
    const intervalId = setInterval(() => {
      if (!navigator.onLine && !this.state.open && !this.state.clickedClose) {
        this.handleOpen();
      }
      if (navigator.onLine && this.state.open) {
        this.handleRequestClose();
      }
    }, 1000);

    this.setState({ intervalId });
  }

  // 在 componentDidMount 使用 setState 將會重複執行 render,
  // 可能會導致 property/layout thrashing
  componentDidMount() {
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleActionTouchTap = () => {
    this.setState({
      open: false,
      clickedClose: true,
    });
  }

  handleReload = () => {
    location.reload();
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

const mapStatsToProps = (state) => ({
  isOffline: state.system.isOffline
});

export default connect(mapStatsToProps, null)(ConnectionStatus);
