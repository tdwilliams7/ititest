import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { loadAnnouncements } from '../../store/actions/annoucementActions';
import styled from 'styled-components';

// components
import TopBar from '../TopBar/TopBar';
import AnnouceList from '../AnnouceList/AnnouceList';

class App extends Component {
  componentDidMount() {
    this.props.loadAnnouncements();
  }

  render() {
    const { loading, announcements } = this.props;
    return (
      <div className="App">
        <TopBar />

        <AnnouceList announcements={announcements} />
      </div>
    );
  }
}

// {
//   loading ? null : (
//     <div>
//       {/* if has name, display card with name picture, years */}
//       {announcements.map(announcement => {
//         if (announcement.name) {
//           return (
//             <AnnouncementCard
//               key={announcement._id}
//               announcement={announcement}
//             />
//           );
//         }
//       })}
//     </div>
//   );
// }
// const AnnouncementCard = props => {
//   return (
//     // <Card key={props.announcement.id}>
//     //   <CardText>{`${props.announcement.name.first} ${
//     //     props.announcement.name.last
//     //   }`}</CardText>
//     //   <CardImg
//     //     right
//     //     src={props.announcement.image}
//     //     alt={`${props.announcement.name.first} ${
//     //       props.announcement.name.last
//     //     } image`}
//     //     style={{ width: '20%' }}
//     //   />
//     // </Card>
//     // <Card>
//     //   <CardText sm="8">
//     //     <CardTitle>{`${props.announcement.name.first} ${
//     //       props.announcement.name.last
//     //     }`}</CardTitle>
//     //   </CardText>
//     //
//     //   <Col sm="4">
//     //     <CardImg
//     //       src={props.announcement.image || placeholder}
//     //       alt={`${props.announcement.name.first} ${
//     //         props.announcement.name.last
//     //       } picture`}
//     //     />
//     //   </Col>
//     // </Card>
//   );
// };

const Card = styled(Row)`
  margin-top: 50px;
`;

const CardText = styled(Col)`
  padding-left: 20%;
`;

const CardTitle = styled.h2`
  marign: auto;
`;

const CardImg = styled.img`
  width: 40%;
`;

const mapStateToProps = state => {
  return {
    announcements: state.announcementReducer.announcements,
    loading: state.announcementReducer.loading
  };
};

export default connect(mapStateToProps, { loadAnnouncements })(App);
