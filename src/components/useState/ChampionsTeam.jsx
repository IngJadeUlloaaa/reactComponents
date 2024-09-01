import React, { useState } from 'react'

function ChampionsTeam() {
    const [teamsList, setTeamList] = useState([]);
    const [team, setTeam] = useState('');

    const addChampionsTeam = () =>{
        if(team.trim() === '') return;

        const addTeam = {
            id: Date.now(),
            nombre: team
        };
        setTeamList([...teamsList, addTeam]);
        setTeam('');
    };

    const deleteTeam = (teamId) => {
        setTeamList(teamsList.filter(team => team.id != teamId));
    }

  return (
    <div>
        <title>Lista de Equipos</title>
        <input onChange={(e) => setTeam(e.target.value)} value={team} type="text" placeholder='write your fav team' />
        <button onClick={addChampionsTeam}>Agregar</button>

        <ul>
            {teamsList.map(team => (
                <li key={team.id}>
                    {team.nombre}
                    <button onClick={() => deleteTeam(team.id)} >Eliminar</button>
                </li>
            ))}
        </ul>


    </div>
  )
}

export default ChampionsTeam