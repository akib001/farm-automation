import React from 'react';
import useSWR from "swr";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import CardComponent from "../Components/layouts/CardComponent";

const FarmerHomePage = () => {
    const {data: consumerList, isLoading: isConsumerList} = useSWR(`/farmer/fetch-consumers-list`);

    return (<Box mb={4}>
        {(consumerList?.consumers || []).map((item, index) => (
            <CardComponent key={index}
                           name={item?.name} mobile={item?.mobile} division={item?.division} district={item?.district}
                           upazila={item?.upazila} village={item?.village} demand={item?.demand}
                           quantity={item?.quantity}
            />))}
    </Box>);
};

export default FarmerHomePage;