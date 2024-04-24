import React, { useState } from 'react';
import PlatillosList from './components/PlatillosList';
import PlatilloForm from './components/PlatilloForm';

function App() {
  const [platillos, setPlatillos] = useState([
    { id: 1, comida: 'Taco', description: 'Delicioso taco de carne asada', acompaniantes: ['Salsa verde', 'Cebollitas'], picor: 'Medio', num_personas: 1, image: 'https://cdn2.cocinadelirante.com/sites/default/files/images/2023/01/tacos-arabes-caseros-receta-poblana.jpg' },
    { id: 2, comida: 'Quesadilla', description: 'Quesadilla de queso fundido', acompaniantes: [ 'Salsa roja'], picor: 'No pica', num_personas: 1, image: 'https://example.com/quesadilla.jpg' },
  ]);
  const [platilloAEditar, setPlatilloAEditar] = useState(null);

  const handleEditarPlatillo = (platillo) => {
    setPlatilloAEditar(platillo);
  };

  const handleEliminarPlatillo = (platilloId) => {
    const nuevosPlatillos = platillos.filter(platillo => platillo.id !== platilloId);
    setPlatillos(nuevosPlatillos);
  };
  
  

  const handleAgregarPlatillo = (nuevoPlatillo) => {
    nuevoPlatillo.id = new Date().getTime();
    setPlatillos([...platillos, nuevoPlatillo]);
  };

  const handleGuardarEdicionPlatillo = (platilloEditado) => {
    const nuevosPlatillos = platillos.map(platillo => {
      if (platillo.id === platilloEditado.id) {
        return platilloEditado;
      }
      return platillo;
    });
    setPlatillos(nuevosPlatillos);
    setPlatilloAEditar(null); 
  };

  return (
    <div className="App">
      <PlatilloForm
        onSubmit={handleAgregarPlatillo}
        platilloAEditar={platilloAEditar}
        onGuardarEdicion={handleGuardarEdicionPlatillo} 
      />
      <PlatillosList
        platillos={platillos}
        onEditarPlatillo={handleEditarPlatillo}
        onEliminarPlatillo={handleEliminarPlatillo}
      />
    </div>
  );
}

export default App;
