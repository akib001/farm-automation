import {Route, Routes} from "react-router-dom";
import FarmerLayout from "./Components/layouts/FarmerLayout";
import FarmerHomePage from "./Pages/FarmerHomePage";
import FarmPage from "./Pages/FarmPage";

function App() {
    return (
        <Routes>
            {/*<Route path="/" element={<Auth />} />*/}
            <Route path="/" element={<FarmerLayout/>}>
                <Route index element={<FarmerHomePage />} />
                <Route path={'farm'} element={<FarmPage />} />
                <Route path={'consumers'} element={<FarmerHomePage />} />
            </Route>
        </Routes>
    );
}

export default App;
