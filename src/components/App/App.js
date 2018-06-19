import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAnnouncements } from '../../store/actions/annoucementActions';

// components
import TopBar from '../TopBar/TopBar';

class App extends Component {
  componentDidMount() {
    this.props.loadAnnouncements();
  }

  render() {
    console.log(this.props.announcements);
    const { loading, announcements } = this.props;
    return (
      <div className="App">
        <TopBar />
        {loading ? null : (
          <div>
            {/* if has name, display card with name picture, years */}
            {announcements.map(announcement => {
              if (announcement.name) {
                return (
                  <div>{`${announcement.name.first} ${
                    announcement.name.last
                  }`}</div>
                );
              }
            })}
          </div>
        )}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    announcements: state.announcementReducer.announcements,
    loading: state.announcementReducer.loading
  };
};

export default connect(mapStateToProps, { loadAnnouncements })(App);
