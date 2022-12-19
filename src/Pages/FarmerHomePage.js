import React from 'react';
import useSWR from "swr";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';

const FarmerHomePage = () => {
    const {data: consumerList, isLoading: isConsumerList} = useSWR(`/farmer/fetch-consumers-list`);

    console.log('consumer List', consumerList);

    return (
        <Grid container spacing={2} mt={2}>
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
                                            Akib Ahmed
                                        </Typography>
                                        <Typography variant="h6" sx={{textAlign: {xs: 'center', md: 'left'}}}
                                                    color="text.secondary">
                                            Address: Bipodomdia, Pangsha, Rajbari.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Box sx={{mx: {xs: 'auto', md: '0'}, mb: '4px'}}>
                                            <Button sx={{mr: 1}} href={"tel:01615222275"} startIcon={<LocalPhoneIcon/>}
                                                    variant="contained" size="small">Call Now</Button>
                                            <Button variant="contained" size="small">Demand: 24 KG Jute</Button>
                                        </Box>
                                    </CardActions>
                                </Grid>

                                {/*<Grid item mt={4} xs={2}>*/}
                                {/*    <Button href={"tel:01615222275"} startIcon={<LocalPhoneIcon/>} variant="contained" size="small">Call Now</Button>*/}
                                {/*</Grid>*/}
                            </Grid>
                        </Grid>
                    </Grid>

                </Card>
            </Grid>
        </Grid>
    );
};

export default FarmerHomePage;