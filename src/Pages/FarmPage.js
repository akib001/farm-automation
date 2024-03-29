import {Box, Card, CircularProgress, Grid, Typography} from "@mui/material";
import useSWR from 'swr';
import {format, parseISO} from 'date-fns';
import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useMemo, useState} from "react";
import {useSelector} from "react-redux";

function createData(id, temp, humidity, moisture, light, updatedAt) {
    return {
        id, temp, humidity, moisture, light, updatedAt
    };
}

function FarmPage() {
    const [rows, setRows] = useState([]);

    const farmerId = useSelector(state => state.profile.userId);

    const {
        data: farmData, isLoading: isLoadingFarmData
    } = useSWR(`/farm/get-single-farm-data/${farmerId}`);

    const {
        data: allFarmData, isLoading: isLoadingAllFarmData
    } = useSWR(`/farm/get-all-farm-data/${farmerId}`);

    console.log('is loading', isLoadingFarmData)


    useEffect(() => {
        if (allFarmData?.data?.length > 0) {
            allFarmData.data?.map((item) => {
                const row = createData(item?._id, item?.temp, item?.humidity, item?.moisture, item?.light, format(new Date(parseISO(item?.updatedAt)), 'dd/MM/yy hh:mm a'),);
                return setRows((prev) => [...prev, row]);
            });
        }
    }, [allFarmData]);

    const columns = useMemo(() => [{field: 'id', hide: true}, {
        field: 'temp',
        headerName: 'Temperature',
        width: 110,
        headerAlign: 'center',
        align: 'center'
    }, {
        field: 'humidity',
        headerName: 'Humidity',
        width: 110,
        headerAlign: 'center',
        align: 'center'
    }, {field: 'moisture', headerName: 'Moisture', width: 110, headerAlign: 'center', align: 'center'}, {
        field: 'light',
        headerName: 'Light',
        width: 110,
        headerAlign: 'center',
        align: 'center'
    }, {field: 'updatedAt', headerName: 'Updated At', width: 150, headerAlign: 'center', align: 'center'},], []);

    return (<>
        {(!isLoadingFarmData && !isLoadingAllFarmData) ? (

            <>
                {(allFarmData?.data && farmData?.data) ? (<Box sx={{flexGrow: 1, padding: {xs: 2, md: 8}}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Card variant="outlined" sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #333',
                                borderRadius: '10px',
                                textAlign: 'center',
                                p: '1rem'
                            }}>
                                <Typography variant="h4" gutterBottom>
                                    Farm Temperature:
                                </Typography>
                                <Typography variant="h3" gutterBottom>
                                    {farmData?.data?.temp}° Celcius
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    Updated
                                    At: {farmData?.updatedAt ? format(new Date(parseISO(farmData?.updatedAt)), 'dd/MM/yy hh:mm a') : ''}
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Card variant="outlined" sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #333',
                                borderRadius: '10px',
                                textAlign: 'center',
                                p: '1rem'
                            }}>
                                <Typography variant="h4" gutterBottom>
                                    Farm Humidity:
                                </Typography>
                                <Typography variant="h3" gutterBottom>
                                    {farmData?.data?.humidity * 100}% g.m-3
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    Updated
                                    At: {farmData?.updatedAt ? format(new Date(parseISO(farmData?.updatedAt)), 'dd/MM/yy hh:mm a') : ''}
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Card variant="outlined" sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #333',
                                borderRadius: '10px',
                                textAlign: 'center',
                                p: '1rem'
                            }}>
                                <Typography variant="h4" gutterBottom>
                                    Farm Moisture:
                                </Typography>
                                <Typography variant="h3" gutterBottom>
                                    {farmData?.data?.moisture} dewpoint °F
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    Updated
                                    At: {farmData?.updatedAt ? format(new Date(parseISO(farmData?.updatedAt)), 'dd/MM/yy hh:mm a') : ''}
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Card variant="outlined" sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #333',
                                borderRadius: '10px',
                                textAlign: 'center',
                                p: '1rem'
                            }}>
                                <Typography variant="h4" gutterBottom>
                                    Farm Light:
                                </Typography>
                                <Typography variant="h3" gutterBottom>
                                    {farmData?.data?.light} Lux
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    Updated
                                    At: {farmData?.updatedAt ? format(new Date(parseISO(farmData?.updatedAt)), 'dd/MM/yy hh:mm a') : ''}
                                </Typography>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h4" component='div' align={'center'} sx={{fontWeight: '650'}}
                                        gutterBottom>
                                Farm History Data
                            </Typography>

                            <DataGrid
                                initialState={{
                                    sorting: {
                                        sortModel: [{field: 'updatedAt', sort: 'asc'}],
                                    },
                                }}
                                autoHeight
                                rows={rows}
                                columns={columns}
                                sx={{
                                    color: 'white',
                                    background: '#0e0d0d',
                                    boxShadow: 2,
                                    borderRadius: '10px',
                                    '& .MuiDataGrid-cell:hover': {
                                        color: 'primary.main',
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>) : <Typography variant={"h4"} textAlign={"center"} mt={12}>You have no Farm</Typography>}
            </>

        ) : (<Box sx={{
            width: '100wh', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            <CircularProgress/>
        </Box>)}
    </>);
}

export default FarmPage;
