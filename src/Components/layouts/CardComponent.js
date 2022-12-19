import React from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const CardComponent = ({
                           name, mobile, division, district, upazila, village, demand, quantity
                       }) => {
    return (<Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
                <Card sx={{mx: {sx: '0', md: '4rem'}, px: '1rem', borderRadius: '25px', py: {xs: '1rem', md: '0'}}}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={2} alignContent={'center'}>
                            <CardMedia
                                component="img"
                                alt="Consumer"
                                sx={{width: 140, padding: '15px', ml: 1, mx: {xs: 'auto', md: '0'}}}
                                image="/images/farmer.png"
                            />
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <Grid container>
                                <Grid item xs={12} md={10}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4"
                                                    sx={{textAlign: {xs: 'center', md: 'left'}}} component="div">
                                            {name}
                                        </Typography>
                                        <Typography variant="h6" sx={{textAlign: {xs: 'center', md: 'left'}}}
                                                    color="text.secondary">
                                            Village: {village}, Upazila: {upazila}, District: {district}, Division: {division}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Box sx={{mx: {xs: 'auto', md: '0'}, mb: '4px'}}>
                                            <Button sx={{mr: 1}} href={`tel:${mobile}`} startIcon={<LocalPhoneIcon/>}
                                                    variant="contained" size="small">Call Now</Button>
                                            <Button variant="contained" size="small">Demand: {quantity} KG {demand}</Button>
                                        </Box>
                                    </CardActions>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Card>
            </Grid>
        </Grid>);
};

export default CardComponent;