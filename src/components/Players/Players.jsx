import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import './players.css'

const Players = ({handelSelectedPlayers}) => {
    const [Players, setPlayers] = useState([]);
    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    return (
        <div>
            
            <div className="players-container">
                {
                  Players.map(player => <Player key={player.playerId} handelSelectedPlayers={handelSelectedPlayers} player={player}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;