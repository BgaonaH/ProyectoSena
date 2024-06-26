import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust'
import { useNavigate } from 'react-router-dom';
const OrderCard = () => {
    const navigate =useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[rem] h-[5rem] object-cover object-top' src="https://i.imgur.com/5len0cX.jpg" alt="" />
                
                <div className='ml-5 space-y-2'>
                    <p className=''>Turrón Colombiano</p>
                    <p className='opacity-50 text-xs font-semibold'>Artesanales</p>
                </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>$650</p>
            </Grid>
            <Grid item xs={4}>
                <div>
                {true && <p>
                    <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-6 text-sm'/>
                    <span>
                        Entregado en julio 10
                    </span>
                    </p>}
                </div>
                    <p className='text-xs'>Tu producto ha sido entregado</p>
                {false && <p>
                    <span>
                        Experado en julio 10
                    </span>
                    </p>}

            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard