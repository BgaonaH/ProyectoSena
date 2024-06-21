import React from 'react';
import AdressCard from '../AdressCard/AdressCard';
import { Box, Button, Grid, TextField } from '@mui/material';

const DeliveryAdressForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("address");
        const data = new FormData(e.currentTarget);

        const address = {
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            address:data.get("address"),
            city:data.get("city"),
            stateProvinceRegion:data.get("stateProvinceRegion"),
            zipPostalCode:data.get("zipPostalCode"),
            phoneNumber:data.get("phoneNumber")

        };

        console.log("address", address);  // Corregido para mostrar la variable address en lugar de data
    };

    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AdressCard />
                        <Button sx={{ mt: 2, bgcolor: "red" }} size="large" variant="contained">Entregar Aquí</Button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"  // Corregido para usar "firstName" en lugar de "firstname"
                                        name="firstName"
                                        label="Nombre"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"  // Corregido para usar "lastName" en lugar de "lastname"
                                        name="lastName"
                                        label="Apellido"
                                        fullWidth
                                        autoComplete="family-name"  // Corregido para usar el atributo adecuado
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address"  // Corregido para usar "address" en lugar de "adress"
                                        name="address"
                                        label="Dirección"
                                        fullWidth
                                        autoComplete="street-address"  // Corregido para usar el atributo adecuado
                                        multiline
                                        rows={6}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="Ciudad"
                                        fullWidth
                                        autoComplete="address-level2"  // Corregido para usar el atributo adecuado
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="stateProvinceRegion"
                                        name="stateProvinceRegion"
                                        label="Estado/Provincia/Región"
                                        fullWidth
                                        autoComplete="address-level1"  // Corregido para usar el atributo adecuado
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zipPostalCode"
                                        name="zipPostalCode"
                                        label="Código Postal"
                                        fullWidth
                                        autoComplete="postal-code"  // Corregido para usar el atributo adecuado
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="Número de Teléfono"
                                        fullWidth
                                        autoComplete="tel"  // Corregido para usar el atributo adecuado
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button
                                        sx={{ py: 1.5, mt: 2, bgcolor: "red" }}
                                        size='large'
                                        variant='contained'
                                        type='submit'>
                                        Entregar Aquí
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default DeliveryAdressForm;
