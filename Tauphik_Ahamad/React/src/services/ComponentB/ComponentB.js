import { useEffect } from "react";

export const ComponentB = ({ innerProps2, setInnerProps }) => {
  // useEffect(()=>{
  //     setInnerProps()
  // },[])
  return (
    <div className="w-100 text-center py-5">
      {" "}
      <h3>
        Component B <span className="text-warning"> {innerProps2}</span>
      </h3>
      <button type="button" className="btn btn-primary" onClick={setInnerProps}>
        Set Data
      </button>
    </div>
  );
};
