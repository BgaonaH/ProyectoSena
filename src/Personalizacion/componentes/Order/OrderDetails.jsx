import React from 'react'
import AddressCard from '../AdressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { deepPurple } from '@mui/material/colors'
const OrderDatails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h2 className='font-bold text-xl py-7'>Direcion de Entrega </h2>
            <AddressCard/>
        </div>
        <div className='pu-20'>
            <OrderTracker activeStep={3} />
        </div>
        <Grid className='space-x-5'>
          {[1,1,1,1,1].map((item)=> <Grid item container className='shadow-xl rounded-md p-5 border'
            sx={{alignItems:"center", justifyContent:'space-between'}}>
              <Grid item xs={6}>
                  <div className='flex items-center space-x-4'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://i.imgur.com/5len0cX.jpg" alt="" />
                  
                  <div className='space-y-2 ml-5 text-left'>
                    <p className='font-semibold'>Turrón Colombiano</p>
                    <p className='space-x-5 opacity-50 text-xs font-semibold'><span>peso: 250gr</span><span>Turron</span></p>
                    <p className=''>Artesanales</p>
                    <p>$650</p>
                    </div>
                </div>
              </Grid>
              <Grid item>
                  <Box sx={{color:deepPurple[500]}}>
                    <StarBorderIcon sx={{fontSize:"2rem"}}
                    className='px-2'/>
                    <span>Rate & Review Product</span>
                  </Box>
              </Grid>
            </Grid>)}
            
        </Grid>
    </div>
  )
}

export default OrderDatails