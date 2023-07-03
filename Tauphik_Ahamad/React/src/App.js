import "./App.css";
import Header from "./header/header";
import Banner from "./banner/banner";
import About from "./aboutUs/about";
import Services from "./services/services";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Banner />
        <About />
        <Services />
      </div>
    </>
  );
}

export default App;
