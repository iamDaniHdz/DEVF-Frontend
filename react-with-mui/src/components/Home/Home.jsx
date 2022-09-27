import React from 'react'
import './styles.home.css'

const Home = ({user, signOut}) => {
  const cerrarSesion = () => {
    localStorage.removeItem('token');
    signOut(false)
  }

  return (
    <div>
      <h1>Welcome</h1>
      <h3>{user}</h3>
      <button onClick={cerrarSesion}>Sign out</button>
    </div>
  );
};

export { Home };