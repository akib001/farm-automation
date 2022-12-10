import './App.css';
import {Box, Card, CircularProgress, Grid, Typography} from "@mui/material";
import useSWR from 'swr';
import {format, parseISO} from 'date-fns';

function App() {
    const {data: tempData, isLoading: isLoadingTemp} = useSWR(`/farm/temp`);
    const {data: humidityData, isLoading: isLoadingHumidity} = useSWR(`/farm/humidity`);
    const {data: moistureData, isLoading: isLoadingMoisture} = useSWR(`/farm/moisture`);
    const {data: lightData, isLoading: isLoadingLight} = useSWR(`/farm/light`);

    return (
        <>
            {(!isLoadingTemp && !isLoadingHumidity && !isLoadingMoisture && !isLoadingLight) ? (
                <Box sx={{flexGrow: 1, padding: 8}}>
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
                                    {tempData?.temp}°
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    Updated
                                    At: {tempData?.updatedAt ? format(new Date(parseISO(tempData?.updatedAt)), 'dd/MM/yy hh:mm a') : ''}
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
                                    {humidityData?.humidity * 100}% g.m-3
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    Updated
                                    At: {humidityData?.updatedAt ? format(new Date(parseISO(humidityData?.updatedAt)), 'dd/MM/yy hh:mm a') : ''}
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
                                    {moistureData?.moisture} dewpoint °F
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    Updated
                                    At: {tempData?.moistureData ? format(new Date(parseISO(moistureData?.updatedAt)), 'dd/MM/yy hh:mm a') : ''}
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
                                    {lightData?.light} Lux
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    Updated At: {lightData?.updatedAt ? format(new Date(parseISO(lightData?.updatedAt)), 'dd/MM/yy hh:mm a') : ''}
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            ) : (
                <Box sx={{width: '100wh', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress />
                </Box>
                )}

        </>
    );
}

export default App;
