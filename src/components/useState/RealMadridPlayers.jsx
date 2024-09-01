import React, { useState } from 'react'

function RealMadridPlayers() {
    const [playersList, setPlayersList] = useState([]);
    const [player, setPlayer] = useState('');

    const addPlayers = () =>{
        if (player.trim() === '') return;
        
        const newPlayer = {
            id: Date.now(),
            nombre: player
        };
        setPlayersList([...playersList, newPlayer]);
        setPlayer('');
    }

    const deletePlayer = (playerId) => {
        setPlayersList(playersList.filter(player => player.id != playerId));
    }

  return (
    <div>
        <title>Lista de Jugadores del Real Madrid</title>
        <input onChange={(e) => setPlayer(e.target.value)} value={player} type='text' placeholder='write soccer players' />
        <button onClick={addPlayers}>Agregar</button>

        <ul>
            {playersList.map(player =>(
                <li key={player.id}>{player.nombre}
                    <button onClick={() => deletePlayer(player.id)}>Borrar</button>
                </li>
            ))}

        </ul>

    </div>
  )
}

export default RealMadridPlayers
