// var test = 10;  => global Scope

import { useEffect, useState } from "react";
import axios from "axios";

// const students = [
//   {
//     name: "Ravindra",
//     age: 22,
//     address: "pune",
//   },
//   {
//     name: "Vaishanvi",
//     age: 21,
//     address: "pune 2",
//   },
//   {
//     name: "Harsh",
//     age: 23,
//     address: "pune 3",
//   },
//   {
//     name: "Yogesh",
//     age: 20,
//     address: "Mandwa",
//   },
//   {
//     name: "Prathmesh",
//     age: 24,
//     address: "Mumbai",
//   },
//   {
//     name: "Sagar",
//     age: 25,
//     address: "Delhi",
//   },
//   {
//     name: "Ram kisan",
//     age: 24,
//     address: "West Mumbai",
//   },
//   {
//     name: "Snehal",
//     age: 26,
//     address: "South Mumbai",
//   },
//   {
//     name: "Pooja",
//     age: 25,
//     address: "East Mumbai",
//   },
// ];

const Banner = () => {
  const [studentList, setStudentList] = useState([]);
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    // Run when component load

    axios
      .get("http://localhost:3000/students")
      .then(function (response) {
        // handle success
        setStudentList(response.data);
        setInitialData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []); // Dependency Array

  // var test; //declaration
  // string let data = 'variable value'
  // let stringData = "variable value";
  // console.log("stringData", typeof stringData);

  // let numData = 20;
  // console.log("numData", typeof numData);

  // let boolData = true;
  // console.log("boolData", typeof boolData);

  let test1 = 10;
  let test2 = test1;
  test2 = 30;

  let data1 = [1, 2, 3, 4, 5];
  let data2 = data1;
  data2.push(6); //data2 => [1,2,3,4,5,6]

  const obj1 = {
    id: 123,
    name: "employee name",
    age: 30,
    company: "xyz",
    empId: 56,
    address: {
      home: "home Address",
      office: "office location",
    },
  };

  // console.log(
  //   "obj home => ",
  //   obj1.address.home,
  //   "obj office => ",
  //   obj1.address.office
  // );

  const obj2 = obj1;

  obj2.name = "New employee name";

  // console.log("QQ2", obj2.name);
  // console.log("QQ1", obj1.name);
  // obj2.push(6); //data2 => [1,2,3,4,5,6]
  // data = 70;

  //variable
  /*
    1. var => var a = 10
    2. let => let a = 10 ==> block scope variables
    3. const => const a = 10  ==> block scope variables
  */
  // console.log("QQ test1=> ", test1); // 10
  // console.log("QQ test2=> ", test2); // 30

  // console.log("QQ data1=> ", data1);
  // console.log("QQ data2=> ", data2);

  //

  // Hoisting => variable declaration will move to there top of the scope
  // Scope =>

  // Local Scope
  // if (2 === 2) {
  //   let test = 20;
  //   console.log("QQ 2", test);
  // }

  // console.log("QQ 3", test);

  /* 
    . Data types

    1. Primitive Data Types => 

      - string
      - Boolean
      - number
      - undefined
      - null
      - Symbol

    2. non-primitive =>

      - Object
      - Array

    #Array functions

    1. sort() 
    2. reverse()
    3. pop()
    4. push()
    5. concat()
    6. indexOf()
    7. filter() //inportant
    8. map() // important
    9. some() //important
    10. every() // mid
    11. reduce() // high
    12. find() //mid
    13. findIndex() // low
    14. join() //mid
    15. include() //mid
    16. slice() // mid 
    17. shift() //mid
    18. unShift () // mid 
    19. splice() // high
    20. isArray() //low 
    21. copyWithin() 
    22. flat()
    23. flatMap() //low
    24. forEach() // high 
    25.   
    
    
    
    
    
    
    */

  // Array push() //insert from the end
  // const arr = [1, 2, 3, 4, 5];
  // arr.push("aa");

  // Array pop()  //remove from the end
  // arr.pop();

  // Array shift()  //remove from the start

  // arr.shift();
  // arr.unshift(22);
  //callback function
  /**
   * self invok function
   * ()=>{
   * }
   *
   * name = () =>{
   *  function inner
   * }
   * name();
   *
   * Array of number = [1,2,3,4,7,844,32432,00]
   * Array of string = ['sas', 'asas', 'rew', '424', 'dsa']
   * Array of object = [{name: 'name1'}, {name: 'name2'}, {name: 'name3'}]
   */

  //(element, index)=>{

  //}
  // Array Map() // map((element, index)=>{

  //})
  /**
   * 1. Assign index 0 value to largest // 11
   * 2. second element =>
   *
   */
  const arr = [11, 321, 31, 45, 2, 3, 90, 22, 223, 0]; // sort() => [223, 321] => get last element of array

  let largest = 0;
  arr.map((element, indx) => {
    if (indx === 0) {
      largest = element;
    } else {
      if (largest < element) {
        // 11 < 321 = true => 321 < 31 => false
        largest = element;
      }
    }
  });

  //

  // for (let i = 0; i < 10; i++) {
  //   console.log("QQ", i);
  // }

  /** function name (params) {
    return (prams)
  }
   * Array function
   * 
   * name = (param)=> param * param
   * 
   */

  const squar = [2, 3, 4, 5, 6]; // [4,9,16,25,36] x*x

  const newData = squar.map((item) => item * item * item);

  // console.log("QQ", newData);

  /**
   * Array Filter return a new array with the filtered data
   * => what you want you can filter that,
   * => what you don't want you can filter that,
   *
   * => get all the student those have location to PUNE
   * => get all the student those don't belong to Mumbai Location
   */

  const filterArray = [1, 2, 3, 4, 121, 5, 6, 7, 8, 9, 10, 12];
  // get only even numbers of array => [2,4,6,8,10]

  const finalData = filterArray.filter((element) => {
    if (element % 2 === 0) {
      return element;
    }
  });

  // console.log("QQ", finalData);

  const includeArray = ["sas", "asas", "rew", "424", null, undefined];

  // console.log("QQ", includeArray.includes(undefined));

  // check if we have any student from delhi

  /**
   * AND => if all condition true => then it will be true
   * OR => if anyone condition true => then it will be true
   */

  // console.log("QQ", onlyDelhi);

  /**
   * Array some() => it will return true if any of the array element will be true on condition
   * always return true or false
   *
   * const filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 121, 12];
   */

  const isSome = filterArray.some((value) => {
    // console.log("some: ", value);
    if (value % 11 === 0) {
      return true;
    }
  });

  const handleChange = (event) => {
    if (event.target.value !== "") {
      const updatedList = initialData?.filter((item) => {
        const stName = item.name.toLocaleLowerCase();
        const inputValue = event.target.value?.toLocaleLowerCase();
        if (stName.indexOf(inputValue) !== -1) {
          return item;
        }
      });
      setStudentList(updatedList);
    } else {
      setStudentList(initialData);
    }
  };

  return (
    //jsx
    <div className="d-flex flex-wrap justify-content-center my-5 w-100">
      <div className="w-100 mb-4 d-flex justify-content-center">
        {/* <div className="mb-3 col-8">
          <label className="form-label">Search Name</label>
          <input type="text" className="form-control" onChange={handleChange} />
        </div> */}
      </div>
      {/* {studentList.length > 0 &&
        studentList.map((obj, index) => (
          <div className="card col-8 mb-3 position-relative" key={index}>
            <div className="card-body">
              <h4> {obj.name} </h4>
              <p>
                <strong>Age:</strong> {obj.age}
              </p>
              <p className="m-0">
                <strong>Address:</strong> {obj.address}
              </p>
              <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                {index + 1}
              </span>
            </div>
          </div>
        ))} */}
    </div>
  );
};

export default Banner;
