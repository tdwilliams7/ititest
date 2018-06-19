import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAnnouncements } from '../../store/actions/annoucementActions';

// components
import TopBar from '../TopBar/TopBar';
import AnnouceList from '../AnnouceList/AnnouceList';

class App extends Component {
  componentDidMount() {
    this.props.loadAnnouncements();
  }

  render() {
    const { announcements } = this.props;
    return (
      <div className="App">
        <TopBar />
        <AnnouceList announcements={announcements} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    announcements: state.announcementReducer.announcements
  };
};

export default connect(mapStateToProps, { loadAnnouncements })(App);
