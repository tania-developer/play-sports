import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import LeagueCard from '../LeagueCard/LeagueCard';
import './Home.css'


const Home = () => {
    const [league, setLeague] = useState([]);
    // console.log(league);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(response => response.json())
            .then(data => setLeague(data.leagues.slice(0, 15)));

    }, [])

    return (
        <div>
            <Banner></Banner>
            <div className="container">
                <div className="displayCard">
                    {
                        league.map(lg => <LeagueCard
                            league={lg} id={lg.idLeague}>
                        </LeagueCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;