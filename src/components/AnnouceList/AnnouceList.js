import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import placeholder from '../../assets/placeholder.png';

class AnnouceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: []
    };
  }

  componentDidMount() {
    this.setState({
      announcements: this.props.announcements
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.announcements !== this.props.announcements) {
      this.setState({
        announcements: this.props.announcements
      });
    }
  }

  render() {
    const { announcements } = this.state;
    return announcements.map(announcement => {
      if (announcement.name) {
        return (
          <Card>
            <CardText sm="8">
              <CardTitle>{`${announcement.name.first} ${
                announcement.name.last
              }`}</CardTitle>
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
      }
    });
  }
}

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

export default AnnouceList;
