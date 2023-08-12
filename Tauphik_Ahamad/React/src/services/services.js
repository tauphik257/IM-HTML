import { useContext, useEffect, useState } from "react";
import { ComponentA } from "./ComponentA/ComponentA";
import "./services.css";
import { AppContext } from "../appContext/appContext";
import { useNavigate } from "react-router-dom";
/**
 *
 * Hooks
 *
 * 1. useCallback() // similar useEffect
 * 2. useMemo() // similar useEffect
 * 3. useLayoutEffect() // similar useEffect
 *
 * 3. useContext()
 * 4. useReducer()
 * 5. customHooks()  /// you will create
 *
 * 1. Component A => Child Component A1 // Props => Parent to child and child to parent as well
 * 2. Component B => Child Component B1 // Prop drilling =>
 *
 * RootParent => Component A and Component B
 *
 * RootParent => Component C => Component C1 => Component C2 => Component C3  => Component C4  // Prop drilling =>
 *
 * independent Component => that will store the data
 *
 * element.current
 *
 * useContext() => Context API
 *
 *
 *
 *
 */
const Services = () => {
  const [propsData, setPropsData] = useState("props Data from Parent");
  const navigate = useNavigate();

  useEffect(() => {
    const serviceId = window.location.pathname;
    console.log("QQ", serviceId.split("/").pop());
    // navigate("/about");
  }, []);

  const handleProps = () => {
    setPropsData("props Data Updated From Child");
  };

  return (
    <section id="values" className="values">
      <h2 className="w-100 text-center p-4">Classes Component</h2>
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2 id="ourValues">Our Values</h2>
          <p>Odit est perspiciatis laborum et dicta</p>
        </header>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="box">
              <img src="/images/values-1.png" className="img-fluid" alt="" />
              <h3>Ad cupiditate sed est odio</h3>
              <p>
                Eum ad dolor et. Autem aut fugiat debitis voluptatem
                consequuntur sit. Et veritatis id.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="box">
              <img src="/images/values-2.png" className="img-fluid" alt="" />
              <h3>Voluptatem voluptatum alias</h3>
              <p>
                Repudiandae amet nihil natus in distinctio suscipit id.
                Doloremque ducimus ea sit non.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="box">
              <img src="/images/values-3.png" className="img-fluid" alt="" />
              <h3>Fugit cupiditate alias nobis.</h3>
              <p>
                Quam rem vitae est autem molestias explicabo debitis sint. Vero
                aliquid quidem commodi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ComponentA innerProps={propsData} setInnerProps={handleProps} />
    </section>
  );
};

export default Services;
