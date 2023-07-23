import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
  const [productList, setProductList] = useState([]);
  const [inputValue, setInputValue] = useState({
    productName: "",
    productDes: "",
  });

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    axios
      .get("http://localhost:3000/product")
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  /**
   * JavaScript Operators
   *
   * 1. Arithmetic => +, -, *, /
   * 2. Logical => AND (&&), OR ( || ), NOT ( ! )
   * 3. Comparison => < , > , == , <= , >=, !==
   * 4. Assignment => a = a + b => a+=b => a-=b
   * 5. Ternary => (1===1) ? 'true condition' : 'Else condition will run'
   *
   *    if(1===1){
   *      run true condition
   *      }else{
   *
   *       Else condition will run
   *       }
   *
   *  1. get() , post(),
   *
   *  patch(), delete(), put()
   *
   *
   *
   */

  let a = true;
  let b = false;
  let c = true;
  let d = undefined;
  let e = null;

  // console.log("QQ", a + b, a * b);

  // AND (if anyone is false, then output will be False)

  // console.log("QQ", a && c && d && e);

  // OR (if anyone is true, then output will be True)

  // console.log("QQ", a || c || d || e);

  // NOT (reverse the value(boolean), (if value is not in Boolean then it will convert to boolean) )
  let aa = "Ternary True case";
  let bb = "Ternary False";

  // console.log("QQ", !aa, !bb);

  /**
   * listing
   *  1. Product Name
   *  2. Product Image
   *  3. Product Quantity
   *  4. Order Date
   *
   *  Details
   *    1. Product Name
   *   2. Product Image
   *   3. Product Quantity
   *   4. Order Date
   *   5. Trasaction ID
   *   6. delivery Address
   *
   *
   */

  const orderDetails = [
    {
      id: 123,
      orderName: "Order name",
      trasactionID: 30,
      invoiceNumber: "xyz",
      deliveryAddress: 56,
      orderDate: "",
      mobileNumber: "",
      deliveryDate: "",
      amount: "",
      quantity: "",
      productName: "",
      productId: "",
      productImg: "",
    },
    {
      id: 123,
      orderName: "Order name",
      trasactionID: 30,
      invoiceNumber: "xyz",
      deliveryAddress: 56,
      orderDate: "",
      mobileNumber: "",
      deliveryDate: "",
      amount: "",
      quantity: "",
      productName: "",
      productId: "",
      productImg: "",
    },
    {
      id: 123,
      orderName: "Order name",
      trasactionID: 30,
      invoiceNumber: "xyz",
      deliveryAddress: 56,
      orderDate: "",
      mobileNumber: "",
      deliveryDate: "",
      amount: "",
      quantity: "",
      productName: "",
      productId: "",
      productImg: "",
    },
  ];

  /**
   * ##JavaScript Functions =>
   *
   * 1. Normal Function =>
   * function <Name Of Function> () {
   *
   * }
   *
   * 2. Arrow Function => <function name> = ()=> {}
   *
   * return =>
   */

  function squar(value) {
    const result = value * value;
    return result;
  }

  const getSquare = squar(4);

  let globalData = "test";

  function checkTest(value) {
    if (value === "test") globalData = "Test Passed";
    else globalData = "Test Failed";
  }

  checkTest("test");

  /**
   * What is parameter =>
   *
   * function(param1, param2, param3, param4) =>
   *
   * get => 1. param1
   *  2. param2
   *  3. param3
   *  4. param4
   *
   *
   */

  const name = "Employee Name";

  const empDetails = (name, age, xyz) => {
    // console.log("name: ", name, age, xyz);
  };

  const addNewProduct = () => {
    const addNew = {
      id: 6,
      productName: inputValue,
      productId: 6,
    };
    axios
      .post("http://localhost:3000/product", addNew)
      .then((res) => {
        getProductList();
      })
      .catch((error) => {
        // console.log("Post Error", error);
      });
    // console.log("QQ", addNew);
  };

  /**
   * if condition =>
   *
   */

  const dataArray = [1]; // [1,2,3]
  const dataObject = {};
  const dataValue = 4;

  if (dataArray.length) {
    // only if array have some value
    // console.log("QQ If block run successfully");
  }

  if (Object.keys(dataObject).length > 0) {
    // only if Object have some value
    // console.log("QQ If block run successfully");
  }

  // if (dataValue === 1) {
  //   console.log("QQ  block 1");
  // } else if (dataValue === 2) {
  //   console.log("QQ  block 2");
  // } else if (dataValue === 3) {
  //   console.log("QQ  block 3");
  // } else {
  //   console.log("QQ Last else block");
  // }

  // switch case

  // switch (dataValue) {
  //   case 1:
  //     console.log("QQ  block 1");
  //     break;
  //   case 2:
  //     console.log("QQ  block 2");
  //     break;
  //   case 3:
  //     console.log("QQ  block 3");
  //     break;
  //   default:
  //     console.log("QQ Last Default block");
  // }

  let whileNum = 1;

  while (whileNum <= 10) {
    // console.log("QQ while Num: ", whileNum);
    whileNum++;
  }

  /**
   * Error Handling
   *
   *
   *
   */

  const empData = {
    name: "employee name",
    age: 32,
    // edu: {
    //   first: "First Education",
    //   second: "Second Education",
    // },
  };

  // let dataVal = 10;

  // if (dataVal === 10) throw "Data Value throw if Condition";
  // else throw "Data Value throw Else Condition";

  try {
    const name = empData.name;
    const age = empData.age;
    const address = empData.address; // undefined
    // console.log("QQ Try block", empData.edu.first);
  } catch (err) {
    // console.log("QQ Error block run", err);
  } finally {
    // console.log("QQ Finally block run");
  }

  /**
   * JavaScript Events
   *
   * 1. click()
   * 2. doubleClick()
   * 3. mouseHover()
   * 4. mouseOut()
   * 5. onChange()
   * 6. onScroll()
   * 7. onHover()
   * 8. resize()
   * 9.
   *
   * // Form
   * 1. keyPress()
   * 2. focus()
   * 3. blur()
   * 4. submit()
   * 5. onChange()
   * 6. onSelect()
   * 7. invalid()
   * 8. reset()
   * 9.
   *
   * // Keyboard and mouse
   *
   * 1. copy()
   * 2. paste()
   * 3. cut()
   * 4. enter()
   * 5. keyUp()
   * 6. keyDown()
   * 7. keyPress()
   * 8. mouseDown()
   * 9. mouseUp()
   * 10. mouseMove()
   * 11. mouseOver()
   * 12. mouseEnter()
   * 13. mouseOut()
   *
   *
   *
   *
   *
   */

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });

    /**
     * {
     *  name: '', e.target.value
     *  description: '' e.target.value
     *  name: 'Bottom', e.target.value
     * }
     *
     */

    // let res = /^[a-zA-Z]+$/.test(e.target.value);
    // console.log("QQ", res);
    /**
     * value = hello 1
     * 1. split('')  => ['h','e', 'l', 'l', 'o', '', '1']
     */
  };

  const handleEdit = (editItem) => {
    setInputValue(editItem);
  };

  const updateProduct = () => {
    console.log("QQ", inputValue);
    axios
      .put(`http://localhost:3000/product/${inputValue.id}`, inputValue)
      .then((res) => {
        console.log("QQ res", res);
        getProductList();
      })
      .catch((err) => {
        console.log("QQ err", err);
      });
    //http://localhost:3000/product
  };

  return (
    <div className="d-flex flex-wrap justify-content-center my-5 w-100">
      {!!dataArray.length && <h3>condition true for Array !!</h3>}
      {Object.keys(dataObject).length > 0 && (
        <h3>condition true for Object !!</h3>
      )}
      <div className="w-100 mb-4 d-flex justify-content-center">
        <div className="mb-3 col-8">
          <div className="mb-3">
            <label className="form-label">Enter product Name</label>
            <input
              type="text"
              name="productName"
              className="form-control"
              placeholder="Enter product Name"
              value={inputValue.productName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Enter product description</label>
            <input
              type="text"
              name="productDes"
              className="form-control"
              placeholder="Enter product description"
              value={inputValue.productDes}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={addNewProduct}
            >
              Add
            </button>
            <button
              type="button"
              className="btn btn-primary ms-3"
              onClick={updateProduct}
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
      {productList.length > 0 &&
        productList.map((item) => (
          <div className="card col-8 mb-3 position-relative" key={item.id}>
            <div className="card-body">
              <h4>{item.productName}</h4>
              <p className="m-0">{item.productDes}</p>
              <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                {item.id}
              </span>
              <button
                type="button"
                className="btn btn-primary position-absolute top-0 end-0"
                onClick={() => handleEdit(item)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default About;
