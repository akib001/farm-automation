import {Route, Routes} from "react-router-dom";
import FarmPage from "./Pages/FarmPage";


function App() {


    return (
        <Routes>
            <Route path="/" element={<FarmPage/>} />
        </Routes>
    );
}

export default App;
