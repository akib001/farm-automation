import {Route, Routes} from "react-router-dom";
import FarmPage from "./Pages/FarmPage";
import Auth from "./Pages/AuthPage";
import FarmerLayout from "./Components/layouts/FarmerLayout";


function App() {


    return (
        <Routes>
            {/*<Route path="/" element={<Auth />} />*/}
            <Route index element={<FarmerLayout/>}>

            </Route>
        </Routes>
    );
}

export default App;
