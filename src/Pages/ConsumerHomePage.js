import React from 'react';
import useSWR from "swr";
import {Box} from "@mui/material";
import CardComponent from "../Components/layouts/CardComponent";

const ConsumerHomePage = () => {
    const {data: farmerList, isLoading: isFarmerList} = useSWR(`/consumer/fetch-farmers-list`);

    return (<Box mb={4}>
        {(farmerList?.farmers || []).map((item, index) => (
            <CardComponent key={index}
                           name={item?.name} mobile={item?.mobile} division={item?.division} district={item?.district}
                           upazila={item?.upazila} village={item?.village} demand={item?.daily_production}
                           quantity={item?.quantity}
            />))}
    </Box>);
};

export default ConsumerHomePage;