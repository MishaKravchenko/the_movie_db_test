import './App.css';
import {Route, Routes} from "react-router-dom";
import {BaseLayout} from "./layouts";
import {HomePage, MoviesPage} from "./pages";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<BaseLayout/>}>
                    <Route path={'/home'} element={<HomePage/>}/>
                    <Route path={'/movies'} element={<MoviesPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
