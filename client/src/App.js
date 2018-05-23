import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BGVid from './components/BGVid';
import './assets/stylesheets/civ6.css';
import { prefGetLocal, prefGetOnline } from './actions/preferences';
import { mainRoutes } from './routes';
import { withRouter } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import ToolTip from './components/ToolTip';
import Preferences from './components/modals/Preferences';

class App extends Component {
  componentDidMount() {
    if(localStorage.getItem('prefs_local') !== null) {
      this.props.prefGetLocal(JSON.parse(localStorage.getItem('prefs_local')));
    }
    if(localStorage.getItem('prefs_online') !== null) {
      this.props.prefGetOnline(JSON.parse(localStorage.getItem('prefs_online')));
    }
  }

  render() {
    return (
      <div className="App">
        <BGVid vidbg={this.props.preferences.local.vidbg} />
        {mainRoutes}
        <Preferences title="Preferences" />
        <ReactTooltip globalEventOff="click" id="global" className="ToolTipClear" offset={{right: 16}} place="right">
            <ToolTip text={this.props.utils.tooltip.tip} />
        </ReactTooltip>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    preferences: state.preferences,
    utils: state.utils
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    prefGetLocal,
    prefGetOnline
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
