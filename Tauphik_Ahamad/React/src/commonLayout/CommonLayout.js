import Header from "../header/header";
import Banner from "../banner/banner";
import About from "../aboutUs/about";
import Services from "../services/services";
import { AppContext } from "../appContext/appContext";
import { useReducer, useState } from "react";
import { INITIAL_STATE, countReducer } from "../reducer/reducer";
import { countMinus, countPlus } from "../reducer/action";
import "./layout.css";
import { Route, Routes } from "react-router-dom";
import { ComponentB } from "../banner/ComponentB/ComponentB";
import { ComponentC } from "../banner/ComponentC/ComponentC";
import { ComponentD } from "../banner/ComponentD/ComponentD";

export const CommonLayout = () => {
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
          <div className="route-body">
            <Routes>
              <Route path="/home" element={<Banner />}>
                <Route path="/home/compB" element={<ComponentB />} />
                <Route path="/home/compC" element={<ComponentC />} />
                <Route path="/home/compD" element={<ComponentD />} />
              </Route>
              <Route path="/about" element={<About />} />
              <Route path="/services/:serviceId" element={<Services />} />
            </Routes>
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
};
