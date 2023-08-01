/**
 * 1. SPA
 * 2. Js Library
 * 3. resuable component or multi level component
 * 4. Open source
 *
 * SPA => Single Page Application => only part of page will change
 *
 * 1. Real DOM => Browser dom
 * 2. Virtual DOM => React Virtual DOM => transfer to browser for Real DOM
 *
 * React Buildings blocks
 *
 * 1. components
 * 2. Routing
 * 3. Hooks
 * 4. States
 * 6. props
 * 7. jsx
 * 8. style
 * 9.
 *
 * Component => independent part of page / reusable code / separate block of code /
 *
 * Component start with Capical letter
 *
 * JSX => XHTML => HTML5 => XML =>
 *
 * JavaScriptXML => variable , function, method, larg calculatio, => it should always return a value (data)
 *
 *
 * React Hooks
 *
 *  1. useState()
 *  2. useEffect()
 *  3. useMemo()
 *  4. useCallback()
 *  5. useContext()
 *
 * component lifecycle
 *
 * 1. initialization => render
 * 2. Mounting => rendering jSX
 * 3. Updating =>
 * 4. Unmounting
 *
 *
 *
 */

import { useEffect, useState } from "react";
import Logo from "./logo";
import axios from "axios";

// function Header() {

// class Header extends React.Component{
//   constructor(){
//     this.state ={ => useState()
//       name: 'abc',
//       isLoader: false
//     }
//   }

//   componentWillMount()
//   componentDidMount()
//   componentWillUpdate()
//   componentDidUpdate()

//   componentWillReceiveProps()

// useEffect()

// }

/**
 * 1. synchronous => line by line
 * 2. Asynchronous =>
 *
 * Destructuring =>
 *
 * const empData = ['Emp Name', 'Delhi', 32, '12345']
 *
 * const mobileNo = empData[3] // '12345'
 *
 */

const Header = () => {
  const [joinby, setJoinby] = useState("Google"); // => [variable-Contain-value, set the value]
  const [count, setCount] = useState(1);
  const [countMultiByTwo, setCountMultiByTwo] = useState(2);

  useEffect(() => {
    setCountMultiByTwo(count * 2);
  }, [count]);

  /**
   * [] => only on component load
   * [value] => every time when value will change
   * [value-1, value-2, value-3, value-4] => every time when either value-1, OR value-2 OR value-3 OR value-4  will change
   *
   */

  // const handleDataValue = async () => {
  //   axios
  //     .get("URL")
  //     .then(() => {
  //       setIsLoader("success");
  //     })
  //     .catch(() => {
  //       setIsLoader("error");
  //     });
  //   if (1 === 1) {
  //   } else if (2 === 1) {
  //   }
  //   return {};
  // };

  // Next line

  // const empData = ["Emp Name", "Delhi", 32, "12345"];
  // //empData[0]
  // const [empName, age, mobileNo] = empData; // '12345'

  // const empObj = {
  //   name: "emp Obj Name",
  //   address: "South Delhi",
  //   empAge: 28,
  //   mobile: "567890",
  // };
  //empObj.name => 'emp Name'

  // const { address, empAge, mobile, name, fun } = empObj;

  // console.log("QQ", name, address, empAge, mobile);

  return (
    <>
      <div className="container-fluid bg-light position-relative shadow">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
          <Logo />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setJoinby("Zoom")}
          >
            by Zoom
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav font-weight-bold mx-auto py-0">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="class.html" className="nav-item nav-link">
                Classes
              </a>
              <a href="team.html" className="nav-item nav-link">
                Teachers
              </a>
              <a href="gallery.html" className="nav-item nav-link">
                Gallery
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#!"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="blog.html" className="dropdown-item">
                    Blog Grid
                  </a>
                  <a href="single.html" className="dropdown-item">
                    Blog Detail
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Connet by google / Zoom
              </a>
            </div>
            <button type="button" className="btn btn-primary px-4">
              {joinby === "Google" ? "Join class by google" : "Zoom"}
            </button>
          </div>
        </nav>
      </div>
      <div className="w-100 mt-4 text-center">
        <h3>Update the value on useEffect</h3>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCount(count + 1)}
        >
          Update Count by 1
        </button>
        <h3>Current Count: {count}</h3>
        <h3>Count Multi By 2: {countMultiByTwo}</h3>
      </div>
    </>
  );
};

export default Header;
