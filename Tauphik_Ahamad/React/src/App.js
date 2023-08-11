import "./App.css";
import Header from "./header/header";
import Banner from "./banner/banner";
import About from "./aboutUs/about";
import Services from "./services/services";
import { AppContext } from "./appContext/appContext";
import { useReducer } from "react";
import { INITIAL_STATE, countReducer } from "./reducer/reducer";
import { countMinus, countPlus } from "./reducer/action";

/**
 * @param {reducerHandler} function all the reducer action functionality
 * @param {INITIAL_STATE} any initial State of reducer
 *
 */

function App() {
  const [countState, dispatch] = useReducer(countReducer, INITIAL_STATE);

  const contextData = {
    navData: [],
    userData: [],
    countState: countState,
  };

  const handlePlus = () => {
    dispatch(countPlus());
  };

  const handleMinus = () => {
    dispatch(countMinus());
  };

  return (
    <>
      <AppContext.Provider value={contextData}>
        <div className="App">
          <Header />
          <div className="w-100 py-5 text-center bg-info">
            <h3>Reducer: {countState.countData}</h3>
            <div className="w-100">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handlePlus}
              >
                Plus
              </button>
              <button
                type="button"
                className="btn btn-primary ms-3"
                onClick={handleMinus}
              >
                Minus
              </button>
            </div>
          </div>
          <Banner />
          <About />
          <Services />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
