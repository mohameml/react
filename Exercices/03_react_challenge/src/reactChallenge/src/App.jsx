import "./App.css";
import ArrayState from "./components/ArrayState/ArrayState";
import RquestCounter from "./components/RequestCounter/RequestCounter";

function App() {
    return (
        <>
            <div className=".exo">
                <h1>Exo :Updating Arrays in State</h1>
                <ArrayState />
            </div>
            <hr />

            <div className=".exo">
                <h1>Exo : Fix a request counter</h1>
                <RquestCounter />
            </div>
        </>
    );
}

export default App;
