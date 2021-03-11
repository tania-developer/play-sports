import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './LeagueDetailCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenusMars, faFlag, faFutbol, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faYoutubeSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import image from '../../images/male.png';
import img from '../../images/female.png';


const LeagueDetailCard = (props) => {
    const { strCountry, intFormedYear, strGender, strLogo, strSport, strLeague, strBanner } = props.detail;
    let pic;
    if (strGender) {
        pic = image;
    }
    else {
        pic = img;
    }
    return (
        <>
            <div className='banner'>
               <img src={strBanner} alt="" style={{filter: 'opacity(50%)'}}/>
               <div className="center"><img src={strLogo} alt=""/></div>
           </div>
            <Container>
                <Row className="customRow">
                    <Col sm={6}>
                        <div className="customCol">
                            <h3>{strLeague}</h3>
                            <h5><FontAwesomeIcon icon={faMapMarker} /> Founded: {intFormedYear}</h5>
                            <h5><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h5>
                            <h5><FontAwesomeIcon icon={faFutbol} /> Sports: {strSport}</h5>
                            <h5><FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}</h5>
                        </div>
                    </Col>
                    <Col sm={6}><div className="detailCardImg"><img src={pic} alt="" /> </div>
                    </Col>
                </Row>
            </Container>
            <div className="container">
                <p className="detailsText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum blanditiis ratione rerum eum error, placeat expedita ipsa vitae totam corrupti impedit ex ab esse sint maxime ea explicabo culpa eius.
                Consectetur id eaque autem dolorum quas laboriosam, voluptates sed aspernatur nam quaerat exercitationem doloribus amet. Nobis explicabo sed optio enim harum aperiam ad labore, vero vel cupiditate tenetur rem esse?</p>
                <br />
                <p className="detailsText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, dolore? Consequatur laboriosam vero eos eum doloribus expedita aliquid officia sit, adipisci error blanditiis. Beatae quam, aperiam possimus reprehenderit cum fugit.
                Incidunt deserunt eum ea alias vitae culpa illum a reprehenderit excepturi. Corrupti, enim. Et, eius cum eum aliquid iure eligendi laudantium debitis nostrum reiciendis modi totam qui! Maiores, asperiores totam.
                Alias iure modi at atque suscipit reprehenderit, voluptatibus sequi tenetur sunt delectus corporis! Consequatur eum accusantium quam quibusdam sed odio magnam delectus a sit repellat est quisquam deserunt, culpa libero?</p>
            </div>
            <div className="socialIcon">
                <a href="https://www.facebook.com/" target="_blank"
                    rel="noreferrer noopener"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                </a>
                <a href="https://www.youtube.com/" target= "_blank"
                    rel="noreferrer noopener"
                    className="youtube social">
                    <FontAwesomeIcon icon={faYoutubeSquare} size="2x" />
                </a>
                <a href="https://www.twitter.com/" target="_blank" 
                    rel="noreferrer noopener" className="twitter social">
                    <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
                </a>
            </div>
        </>
    );
};

export default LeagueDetailCard;