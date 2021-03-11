import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './LeagueCard.css';
const LeagueCard = (props) => {
    const { strLeague, strSport, idLeague } = props.league;
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(response => response.json())
            .then(data => setDetail(data.leagues[0]))
    }, [idLeague]);

    console.log(detail.strLogo);
    return (
        <div className="cardDiv">
            <Card style={{ width: '20rem', border:'none', height: ''}}>
                <Card.Img variant="top" src={detail.strLogo} className="leagueLogo" />
                <Card.Body>
                    <Card className="title" style={{border:'none'}}>{strLeague}</Card>
                    <Card.Text>Sports type: {strSport}</Card.Text>
                    <Link to={`/league/${idLeague}`}>
                        <Button variant="primary" 
                        className="customBtn" style={{fontWeight: '600', backgroundColor: '#3A42FF'}}>Explore  <FontAwesomeIcon icon={faArrowRight}/></Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LeagueCard;