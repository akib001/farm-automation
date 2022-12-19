import {Route, Routes} from "react-router-dom";
import FarmerLayout from "./Components/layouts/FarmerLayout";
import FarmerHomePage from "./Pages/FarmerHomePage";


function App() {


    return (
        <Routes>
            {/*<Route path="/" element={<Auth />} />*/}
            <Route path="/" element={<FarmerLayout/>}>
                <Route index element={<FarmerHomePage />} />
            </Route>
        </Routes>
    );
}

export default App;
