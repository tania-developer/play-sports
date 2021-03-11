import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LeagueDetailCard from '../LeagueDetailCard/LeagueDetailCard';

const LeagueDetail = () => {
    const {idLeague} = useParams();
    const [detail, setDetail] = useState([]);
    useEffect(() =>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(response => response.json())
        .then(data => setDetail(data.leagues[0]))
    },[idLeague]);
    return (
        <div>
            
            <LeagueDetailCard detail={detail}></LeagueDetailCard>

        </div>
    );
};

export default LeagueDetail;