import React from 'react';
import Header from './components/Header/Header'; // Importa el Header
import './styles/Header.css'; // Importa el CSS para el Header

const App = () => {
  return (
    <div>
      <Header />
      <div className="content">
        {/* Aquí va el contenido de tu página */}
        <p>¡Bienvenido a mi aplicación React!</p>
      </div>
    </div>
  );
};

export default App;
