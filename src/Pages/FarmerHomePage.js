import React from 'react';
import useSWR from "swr";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const FarmerHomePage = () => {
    const {data: consumerList, isLoading: isConsumerList} = useSWR(`/farmer/fetch-consumers-list`);

    console.log('consumer List',consumerList);

    return (
        <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
                <Card sx={{mx: '2rem', borderRadius: '25px', display: 'flex'}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        sx={{ width: 140, padding: '15px' }}
                        image="/images/farmer.png"
                    />
                    <Box>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small">Share</Button>
                        <Button variant="contained" size="small">Learn More</Button>
                    </CardActions>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
};

export default FarmerHomePage;