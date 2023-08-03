import { useState } from "react";
import { ComponentB } from "../ComponentB/ComponentB";

export const ComponentA = ({ innerProps, setInnerProps }) => {
  const [compAData, setCompAData] = useState(`${innerProps} From A`);

  const handleCompAData = () => {
    setCompAData("Data Set from Component B");
  };
  return (
    <div className="w-100 text-center py-5">
      {" "}
      <h3>
        Component A <span className="text-warning"> {innerProps}</span>
      </h3>
      <ComponentB innerProps2={compAData} setInnerProps={handleCompAData} />
    </div>
  );
};
