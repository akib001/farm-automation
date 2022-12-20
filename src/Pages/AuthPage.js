import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {
    Card,
    CircularProgress,
    InputAdornment,
    Stack,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import FormInputText from '../Components/form-components/FormInputText';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {profileActions} from '../store/profile-slice';

const theme = createTheme();

export default function Auth() {
    const [authMode, setAuthMode] = useState('farmer');
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = React.useState(false);

    const dispatch = useDispatch();

    const {
        handleSubmit, control, formState: {errors},
    } = useForm();

    const handleAuthMode = (event, changedMode) => {
        setErrorMessage('');
        setAuthMode(changedMode);
    };

    const handleSignIn = () => {
        setErrorMessage('');
        setIsSignIn((prev) => !prev);
        console.log(isSignIn);
    };

    const onSubmitHandler = async (data) => {
        setLoading(true);
        setErrorMessage('');
        if (isSignIn && authMode === 'farmer') {
            try {
                const loginRes = await axios.post('/auth/farmer/login', {
                    ...data, role: 'farmer',
                });
                dispatch(profileActions.userLogin(loginRes.data));
                console.log('Farmer Signed in');
                setLoading(false);
            } catch (error) {
                setErrorMessage(error.response?.data.message);
                setLoading(false);
            }
        }

        // Farmer Signup
        if (!isSignIn && authMode === 'farmer') {
            try {
                await axios.put('/auth/farmer/signup', {
                    ...data, role: 'farmer',
                });
                console.log('Farmer Sign UP');

                const loginRes = await axios.post('/auth/farmer/login', {
                    ...data, role: 'farmer',
                });
                dispatch(profileActions.userLogin(loginRes.data));
                setLoading(false);
            } catch (error) {
                setErrorMessage(error.response?.data.message);
                setLoading(false);
            }
        }

        if (isSignIn && authMode === 'consumer') {
            try {
                const loginRes = await axios.post('/auth/consumer/login', {
                    ...data, role: 'consumer',
                });
                dispatch(profileActions.userLogin(loginRes.data));
                setLoading(false);
            } catch (error) {
                setErrorMessage(error.response?.data.message);
                setLoading(false);
            }
        }

        if (!isSignIn && authMode === 'consumer') {
            try {
                await axios.put('/auth/consumer/signup', {
                    ...data, role: 'consumer',
                });
                console.log('Consumer Sign UP');
                const loginRes = await axios.post('/auth/consumer/login', {
                    ...data, role: 'consumer',
                });
                dispatch(profileActions.userLogin(loginRes.data));
                setLoading(false);
            } catch (error) {
                setErrorMessage(error.response?.data.message);
                setLoading(false);
            }
        }
    };

    return (<ThemeProvider theme={theme}>
        <Grid container component="main" sx={{height: '100vh'}}>
            <CssBaseline/>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    flexGrow: "0",
                    position: 'relative'
                }}
                // sx={{
                //     backgroundImage: 'url(https://raw.githubusercontent.com/akib001/farm-automation/complete_app/public/images/coverImage.png)',
                //     backgroundRepeat: 'no-repeat',
                //     backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                // }}
            >

                <img src={"/images/farmAutomationCover.png"}
                     style={{
                         height: "100%",
                         width: "100%",
                         objectFit: "cover",
                         position: 'absolute',
                         inset: '0',
                     }}
                />
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',
                    }}
                >
                    <ToggleButtonGroup
                        color="primary"
                        value={authMode}
                        exclusive
                        onChange={handleAuthMode}
                        sx={{
                            mt: 4, mb: 2,
                        }}
                    >
                        <ToggleButton value="farmer">Farmer Login</ToggleButton>
                        <ToggleButton value="consumer">Consumer Login</ToggleButton>
                    </ToggleButtonGroup>
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {authMode === 'farmer' ? isSignIn ? 'Farmer Login' : 'Farmer Sign Up' : isSignIn ? 'Consumer Login' : 'Consumer Sign Up'}
                    </Typography>

                    <Grid container component="form" mt={1} spacing={3}>

                        {isSignIn &&
                        (<><Grid item xs={12}>
                            <FormInputText
                                name={'mobile'}
                                control={control}
                                label="Phone Number"
                            />
                        </Grid>
                            <Grid item xs={12}>
                                <FormInputText
                                    name={'password'}
                                    control={control}
                                    label="Password"
                                    type="password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary"/>}
                                    label="Remember me"
                                />
                            </Grid></>)}
                        {/*For Sign Up Page*/}
                        {!isSignIn && (
                            <>
                                <Grid item xs={6}>
                                    <FormInputText
                                        name={'mobile'}
                                        control={control}
                                        label="Mobile"
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <FormInputText
                                        name={'password'}
                                        control={control}
                                        label="Password"
                                        type="password"
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <FormInputText
                                        name={'name'}
                                        control={control}
                                        label="Full Name"
                                    />
                                </Grid>


                                <Grid item xs={6}>
                                    <FormInputText
                                        name={'division'}
                                        control={control}
                                        label="Division"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormInputText
                                        name={'district'}
                                        control={control}
                                        label="District"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormInputText
                                        name={'upazila'}
                                        control={control}
                                        label="upazila"
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <FormInputText
                                        name={'village'}
                                        control={control}
                                        label="village"
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <FormInputText
                                        name={authMode === 'farmer' ? 'daily_production' : 'demand'}
                                        control={control}
                                        label={authMode === 'farmer' ? 'Daily production' : 'Demand'}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <Controller
                                        name={'quantity'}
                                        control={control}
                                        defaultValue={''}
                                        rules={{required: "field is required"}}
                                        render={({
                                                     field: {onChange, value},
                                                     fieldState: {error},
                                                     formState,
                                                 }) => (
                                            <TextField
                                                helperText={error ? error.message : null}
                                                error={!!error}
                                                onChange={onChange}
                                                type={'number'}
                                                value={value}
                                                fullWidth
                                                label={'Quantity'}
                                                required={true}
                                                variant="outlined"
                                                InputProps={{
                                                    endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                                {(authMode === 'farmer' && (<Grid item xs={6}>
                                    <FormInputText
                                        name={'present_store'}
                                        control={control}
                                        label="Present store"
                                    />
                                </Grid>))}
                            </>
                        )}

                        {errorMessage && (
                            <Grid item xs={12}><Typography sx={{color: 'red'}}>{errorMessage}</Typography></Grid>)}

                        <Grid item xs={12}>
                            <Box sx={{position: 'relative'}}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    disabled={loading}
                                    variant="contained"
                                    onClick={handleSubmit(onSubmitHandler)}
                                >
                                    {isSignIn ? 'Sign In' : 'Sign Up & Login'}
                                </Button>
                                {loading && (<CircularProgress
                                    size={24}
                                    sx={{
                                        color: '#2563eb',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        marginTop: '-10px',
                                        marginLeft: '-12px',
                                    }}
                                />)}
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Button
                                        onClick={handleSignIn}
                                        sx={{textTransform: 'none', mt: -0.5}}
                                    >
                                        {isSignIn ? "Don't have an account? Sign Up" : 'Switch to Login'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    </ThemeProvider>);
}
