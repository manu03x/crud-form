import React, { useState, useEffect } from 'react';
import { FormControl, FormControlLabel, FormGroup, Checkbox, TextField, Button, Select, MenuItem, InputLabel, RadioGroup, Radio, FormLabel } from '@mui/material';

function PlatilloForm({ onSubmit, platilloAEditar, onGuardarEdicion }) {
  const [comida, setComida] = useState('');
  const [description, setDescription] = useState('');
  const [acompaniantes, setAcompaniantes] = useState([]);
  const [picor, setPicor] = useState('');
  const [numPersonas, setNumPersonas] = useState(1);
  const [image, setImage] = useState('');

  useEffect(() => {
    if (platilloAEditar) {
      setComida(platilloAEditar.comida || '');
      setDescription(platilloAEditar.description || '');
      setAcompaniantes(platilloAEditar.acompaniantes || []);
      setPicor(platilloAEditar.picor || '');
      setNumPersonas(platilloAEditar.num_personas || 1);
      setImage(platilloAEditar.image || '');
    }
  }, [platilloAEditar]);

  const handleCheckboxChange = (acompaniante) => {
    if (acompaniantes.includes(acompaniante)) {
      setAcompaniantes(acompaniantes.filter(item => item !== acompaniante));
    } else {
      setAcompaniantes([...acompaniantes, acompaniante]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (platilloAEditar) {
      const platilloEditado = {
        ...platilloAEditar,
        comida,
        description,
        acompaniantes,
        picor,
        num_personas: numPersonas,
        image,
      };
      onGuardarEdicion(platilloEditado);
    } else {
      const nuevoPlatillo = {
        comida,
        description,
        acompaniantes,
        picor,
        num_personas: numPersonas,
        image,
      };
      onSubmit(nuevoPlatillo);
    }
    clearForm();
  };

  const clearForm = () => {
    setComida('');
    setDescription('');
    setAcompaniantes([]);
    setPicor('');
    setNumPersonas(1);
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Comida"
        value={comida}
        onChange={(e) => setComida(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        fullWidth
        margin="normal"
      />
      <FormControl margin="normal" fullWidth>
        <FormLabel component="legend">Acompañantes</FormLabel>
        <FormGroup>
          {['Salsa verde', 'Salsa roja', 'Aguacate', 'Cebollitas'].map((acompaniante, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={acompaniantes.includes(acompaniante)}
                  onChange={() => handleCheckboxChange(acompaniante)}
                />
              }
              label={acompaniante}
            />
          ))}
        </FormGroup>
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <FormLabel component="legend">Picor</FormLabel>
        <RadioGroup
          aria-label="Picor"
          name="picor"
          value={picor}
          onChange={(e) => setPicor(e.target.value)}
        >
          <FormControlLabel value="Sin picante" control={<Radio />} label="Sin picante" />
          <FormControlLabel value="No pica" control={<Radio />} label="No pica" />
          <FormControlLabel value="Sí pica" control={<Radio />} label="Sí pica" />
        </RadioGroup>
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <FormLabel component="legend">Número de personas</FormLabel>
        <TextField
          type="number"
          value={numPersonas}
          onChange={(e) => setNumPersonas(e.target.value)}
          fullWidth
          InputProps={{
            inputProps: { min: 1 }
          }}
        />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <FormLabel component="legend">URL de la imagen</FormLabel>
        <TextField
          value={image}
          onChange={(e) => setImage(e.target.value)}
          fullWidth
        />
      </FormControl>
      <Button variant="contained" type="submit">Guardar</Button>
      <Button variant="contained" color="error" onClick={clearForm}>Cancelar</Button>
    </form>
  );
}

export default PlatilloForm;

