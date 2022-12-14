import React from 'react';
import useSWR from "swr";
import {Box, CircularProgress} from "@mui/material";
import CardComponent from "../Components/layouts/CardComponent";

const FarmerHomePage = () => {
    const {data: consumerList, isLoading: isConsumerList} = useSWR(`/farmer/fetch-consumers-list`);

    return (<>
            {isConsumerList ? (<Box
                sx={{display: 'flex', width: '100%', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
                <CircularProgress/>
            </Box>) : (<Box mb={4}>
                {(consumerList?.consumers || []).map((item, index) => (<CardComponent key={index}
                                                                                      name={item?.name}
                                                                                      mobile={item?.mobile}
                                                                                      division={item?.division}
                                                                                      district={item?.district}
                                                                                      upazila={item?.upazila}
                                                                                      village={item?.village}
                                                                                      demand={item?.demand}
                                                                                      quantity={item?.quantity}
                />))}
            </Box>)}
        </>


    );
};

export default FarmerHomePage;