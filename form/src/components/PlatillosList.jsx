import React from 'react';
import { Typography, List, ListItem, ListItemText, Button, Grid } from '@mui/material';
import Platillo from './Platillo';

function PlatillosList({ platillos, onEditarPlatillo, onEliminarPlatillo }) {
  return (
    <div>
      <Typography variant="h2">Lista de Platillos:</Typography>
      <List>
        {platillos.map(platillo => (
          <ListItem key={platillo.id}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={9}>
                <Platillo platillo={platillo} />
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" color="primary" onClick={() => onEditarPlatillo(platillo)}>Editar</Button>
                <Button variant="contained" color="error" onClick={() => onEliminarPlatillo(platillo.id)}>Eliminar</Button>

              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default PlatillosList;
