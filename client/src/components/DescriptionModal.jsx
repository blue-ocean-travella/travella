import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import StarRatings from '../../node_modules/react-star-ratings';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const imageStyle = {
    height: '200px',
    width: 'auto'
};

const getOpen = (bool) => {
    let open = '';

    if (bool === true) {
        open = 'Currently Open';
    } else {
        open = 'Currently Closed';
    }
    return open;
};

const getColor = (bool) => {
    let color = '';

    if (bool === true) {
        color = 'green';
    } else {
        color = 'red';
    }
    return color;
}

const DescriptionModal = (props) => {
    // console.log('DescriptionModal props: ', props);
    let color = getColor(props.activity.open);

    return (
        <Modal show={props.show} onHide={props.onHide} className='modal-container'
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id='modalTitle'>{props.activity.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container >
                    <Row>
                        <Col>
                            <div>
                                <div className="description-modal-description">
                                    {props.activity.description}
                                </div>
                                <div className='modal-addres-hours-phone-info'>
                                    <div>
                                        <b>Address: {props.activity.address}</b>
                                    </div>
                                    <div>
                                        <b>Hours: <span style={color = { color }}>{getOpen(props.activity.open)}</span></b>
                                    </div>
                                    <div>
                                        <b>Phone: {props.activity.phone}</b>
                                    </div>
                                </div>
                                <span>
                                    <a className='modal-totalReviews' href='#'> {props.activity.numberOfReviews} Google Reviews</a>
                                </span>
                                <div className="itinerary-stars">
                                    <StarRatings
                                        rating={props.activity.rating}
                                        starRatedColor="blue"
                                        // changeRating={this.changeRating}
                                        starDimension="17px"
                                        starSpacing=".5px"
                                        numberOfStars={5}
                                        name='rating'
                                        starRatedColor="#f08804"
                                    />
                                </div>
                                <div className='modal-bigDescription'>
                                </div>
                                <div>
                                    <span>Website: <a href={props.activity.website}>{props.activity.website}</a></span>
                                </div>
                            </div></Col>
                        <Col>
                            <div className='imageAndMap-container'>
                                <img className='description-image' style={imageStyle} src={props.activity.images[2]}></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
          </Button>
            </Modal.Footer>
        </Modal >
    );
};


export default DescriptionModal;