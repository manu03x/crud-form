import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

function Platillo({ platillo }) {
  const { id, comida, description, acompaniantes, picor, num_personas, image } = platillo;

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {comida}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Acompañantes: {acompaniantes.join(', ')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Picor: {picor}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Número de personas: {num_personas}
        </Typography>
        <img src={image} alt={comida} style={{ maxWidth: '100%', marginTop: '10px' }} />
      </CardContent>
    </Card>
  );
}

export default Platillo;
