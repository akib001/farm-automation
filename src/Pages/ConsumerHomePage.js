import React from 'react';
import useSWR from "swr";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import CardComponent from "../Components/layouts/CardComponent";

const ConsumerHomePage = () => {
    const {data: farmerList, isLoading: isFarmerList} = useSWR(`/consumer/fetch-farmers-list`);

    console.log('farmerList', farmerList);

    return (<Box>
        {(farmerList?.farmers || []).map((item, index) => (
            <CardComponent key={index}
                           name={item?.name} mobile={item?.mobile} division={item?.division} district={item?.district}
                           upazila={item?.upazila} village={item?.village} demand={item?.daily_production}
                           quantity={item?.quantity}
            />))}
    </Box>);
};

export default ConsumerHomePage;