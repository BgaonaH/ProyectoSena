import { Avatar, Box, Grid, Rating } from '@mui/material';
import React from 'react';

const ProductReviewCard = () => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={1}>
        <Box>
          <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>R</Avatar>
        </Box>
      </Grid>
      <Grid item xs={11}>
        <div className='space-y-2 px-4 text-left'>
          <p className='font-semibold text-lg'>Ramm</p>
          <p className='opacity-70'>18/07/2024</p>
          <Rating value={4.5} name='half-rating' readOnly precision={0.5} />
          <p>
            Hace mucho no probaba Turrón, ¡una experiencia única!
          </p>
        </div>
        

      </Grid>
    </Grid>
  );
};

export default ProductReviewCard