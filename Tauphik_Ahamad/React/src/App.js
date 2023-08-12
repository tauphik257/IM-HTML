import { useState } from "react";
import "./App.css";
import { CommonLayout } from "./commonLayout/CommonLayout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      {isLoggedIn ? (
        <CommonLayout />
      ) : (
        <h3 className="w-100 text-center p-5">Public Component</h3>
      )}
    </>
  );
}

export default App;
