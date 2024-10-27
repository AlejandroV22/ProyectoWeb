function Footer() {
    const miembros = [
      { nom: 'Farid Rojas', nombre: 'Farid Camilo Rojas Vargas', codigo: '2220051', correo: 'juan.perez@example.com' },
      { nom: 'César Vanegas', nombre: 'César Vanegas Oviedo', codigo: '20231002', correo: 'ana.gomez@example.com' },
      { nom: 'Gabriel Castillo', nombre: 'Gabriel David Castillo Rodriguez', codigo: '20231003', correo: 'carlos.ramirez@example.com' },
      { nom: 'Alejandro Velandia', nombre: 'Alejandro Velandia Gelvez', codigo: '20231004', correo: 'luisa.fernandez@example.com' },
    ];
  
    const mostrarInfo = (miembro) => {
      alert(`Nombre: ${miembro.nombre}\nCódigo: ${miembro.codigo}\nCorreo: ${miembro.correo}`);
    };
  
    return (
      <footer className="text-center py-4">
        <p>Nuestras redes sociales:</p>
        <a href="https://facebook.com">Facebook</a> | 
        <a href="https://twitter.com">Twitter</a> | 
        <a href="https://instagram.com">Instagram</a> | 
        <a href="https://linkedin.com">LinkedIn</a>
  
        <p className="mt-3">Contáctenos:</p>
        {/* Botones para cada miembro del equipo */}
        {miembros.map((miembro, index) => (
          <button
            key={index}
            className="btn btn-info mx-2"
            onClick={() => mostrarInfo(miembro)}
          >
            {miembro.nom}
          </button>
        ))}
      </footer>
    );
  }
  
  export default Footer;
  
  