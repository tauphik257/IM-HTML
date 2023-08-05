import "./App.css";
import Header from "./header/header";
import Banner from "./banner/banner";
import About from "./aboutUs/about";
import Services from "./services/services";
import { AppContext } from "./appContext/appContext";

function App() {
  const contextData = {
    navData: [],
    userData: [],
  };
  return (
    <>
      <AppContext.Provider value={contextData}>
        <div className="App">
          <Header />
          <Banner />
          <About />
          <Services />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
