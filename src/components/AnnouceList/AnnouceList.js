import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import placeholder from '../../assets/placeholder.png';
import moment from 'moment';

class AnnouceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: [],
      sortAZ: false
    };
  }

  componentDidMount() {
    this.setState({
      announcements: this.props.announcements
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.announcements !== this.props.announcements) {
      const announcements = this.props.announcements
        .filter(announcement => {
          return announcement.name;
        })
        .sort((a, b) => {
          return new Date(b.creationDate) - new Date(a.creationDate);
        });
      this.setState({
        ...this.state,
        announcements
      });
    }
  }

  sortByLastName = () => {
    const announcements = this.props.announcements
      .filter(announcement => {
        return announcement.name;
      })
      .sort((a, b) => {
        if (this.state.sortAZ) {
          return b.name.last.localeCompare(a.name.last);
        }
        return a.name.last.localeCompare(b.name.last);
      });
    this.setState({
      ...this.state,
      sortAZ: !this.state.sortAZ,
      announcements
    });
  };

  render() {
    const { announcements } = this.state;
    return (
      <div>
        <button onClick={this.sortByLastName}>Sort by last name</button>
        {announcements.map(announcement => {
          return (
            <Card key={announcement._id}>
              <CardText sm="8">
                <CardTitle>{`${announcement.name.first} ${
                  announcement.name.last
                }`}</CardTitle>
                <CardTitle style={{ fontSize: '1.3em' }}>
                  {moment(announcement.creationDate).format('MM/DD/YYYY')}
                </CardTitle>
              </CardText>

              <Col sm="4">
                <CardImg
                  src={announcement.image || placeholder}
                  alt={`${announcement.name.first} ${
                    announcement.name.last
                  } picture`}
                />
              </Col>
            </Card>
          );
        })}
      </div>
    );
  }
}

const Card = styled(Row)`
  margin-top: 50px;
`;

const CardText = styled(Col)`
  padding-left: 20%;
  display: flex;
  justify-content: center;
`;

const CardTitle = styled.h2`
  margin: auto;
`;

const CardImg = styled.img`
  width: 40%;
`;

export default AnnouceList;
