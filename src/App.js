import {Route, Routes} from "react-router-dom";
import FarmerLayout from "./Components/layouts/FarmerLayout";
import FarmerHomePage from "./Pages/FarmerHomePage";
import FarmPage from "./Pages/FarmPage";
import {useSelector} from "react-redux";
import Auth from "./Pages/AuthPage";
import ConsumerLayout from "./Components/layouts/ConsumerLayout";
import ConsumerHomePage from "./Pages/ConsumerHomePage";

function App() {
    const userRole = useSelector(state => state.profile.role);

    console.log('userRole', userRole)

    const getRoutes = () => {
        switch (userRole) {
            case 'farmer':
                return <Route path="/" element={<FarmerLayout/>}>
                        <Route index element={<FarmerHomePage/>}/>
                        <Route path={'farm'} element={<FarmPage/>}/>
                        <Route path={'consumers'} element={<FarmerHomePage/>}/>
                </Route>

            case 'consumer':
                return <Route path="/" element={<ConsumerLayout/>}>
                    <Route index element={<ConsumerHomePage/>}/>
                    <Route path={'farmers'} element={<ConsumerHomePage/>}/>
                </Route>

            default:
                return <Route index element={<Auth/>}/>
        }
    }

    return (
        <Routes>
            {getRoutes()}
        </Routes>
    );
}

export default App;
