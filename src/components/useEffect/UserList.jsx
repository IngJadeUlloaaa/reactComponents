import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]); // Estado para almacenar los usuarios
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de datos

  useEffect(() => {
    // Hacer la llamada a la API cuando el componente se monta
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data); // Almacenar los datos en el estado
        setLoading(false); // Cambiar el estado de carga a falso
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // El array vacío [] asegura que este efecto solo se ejecute una vez cuando el componente se monta

  if (loading) {
    return <p>Cargando usuarios...</p>; // Mostrar un mensaje de carga mientras los datos se obtienen
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;