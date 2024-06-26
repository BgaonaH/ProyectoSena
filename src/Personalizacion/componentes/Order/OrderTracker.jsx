import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps=[
    " Realizado",
    "Orden confirmada",
    "Enviado",
    " En camino",
    "Entregado"
]

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
    {steps.map((label)=> <Step>
        <StepLabel sx={{color:"#9155fD", fontSize:"44px"}}>
            {label}
        </StepLabel>
    </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker