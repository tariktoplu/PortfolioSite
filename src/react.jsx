import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Tarık Toplu.</a>
      {/* Diğer içerikler buraya gelecek */}
    </nav>
  );
}

export default Navbar;

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    {/* Diğer bileşenler buraya gelecek */}
  </React.StrictMode>,
  document.getElementById('root') // HTML dosyanızdaki render hedefini belirtin
);
