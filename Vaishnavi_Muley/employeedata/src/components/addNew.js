import './addNew.css';
import { useState,useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Addnew = (props) => {
    const navigate=useNavigate()
    const [inputvalue, setinputvalue] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const { getdata } = props;

    // creating ref hooks
    const tempplot = useRef(null);
    const tempstreet = useRef(null);
    const tempcity = useRef(null);
    const tempstate = useRef(null);
    const tempcountry = useRef(null);
    const pemtplot = useRef(null);
    const pemtstreet = useRef(null);
    const pemtcity = useRef(null);
    const pemtstate = useRef(null);
    const pemtcountry = useRef(null);

    const handleInputChange=(e)=>{
        setinputvalue({
            ...inputvalue,
            [e.target.name]: e.target.value
        });
    }

    
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    
    useEffect(()=>{
        if(isChecked){
            pemtplot.current.value=tempplot.current.value;
            pemtstreet.current.value=tempstreet.current.value;
            pemtcity.current.value=tempcity.current.value;
            pemtstate.current.value=tempcity.current.value;
            pemtcountry.current.value=tempcountry.current.value;
            // disable
            pemtplot.current.disabled=true;
            pemtstreet.current.disabled=true;
            pemtcity.current.disabled=true;
            pemtstate.current.disabled=true;
            pemtcountry.current.disabled=true;
        }
        else{
            pemtplot.current.value="";
            pemtstreet.current.value="";
            pemtcity.current.value="";
            pemtstate.current.value="";
            pemtcountry.current.value="";
            // remove disabled
            pemtplot.current.disabled=false;
            pemtstreet.current.disabled=false;
            pemtcity.current.disabled=false;
            pemtstate.current.disabled=false;
            pemtcountry.current.disabled=false;
        }
    },[isChecked])

    const adddata = () => {
        axios.post('http://localhost:3004/empdata', inputvalue)
            .then(function (response) {
               getdata();
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <div>
            <h1 className="mt-3">Enter Details</h1>
            <div className="my-3 mx-5  p-3 shadow text-start">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-4 fw-semibold">Name:</label>
                        <input type="text" placeholder="Firstname" name='name'onChange={handleInputChange} className="form-control-lg p-2"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-4 fw-semibold">Designation:</label>
                        <input type="text" placeholder="Designation" name='designation' onChange={handleInputChange} className="form-control-lg p-2 ms-3"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-4 fw-semibold">Email:</label>
                        <input type="email" placeholder="Email" name='email' onChange={handleInputChange} className="form-control-lg p-2 ms-3"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-4 fw-semibold">Blood Group:</label>
                        <input type="text" placeholder="Blood Group" name='bg' onChange={handleInputChange} className="form-control-lg p-2 ms-3"/>
                        <label htmlFor="exampleInputEmail1" className="ms-5 fs-4 fw-semibold">Age:</label>
                        <input type="text" placeholder="Blood Group" name='age' onChange={handleInputChange} className="form-control-lg p-2 ms-3"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-4 fw-semibold mb-2">Temporary Address:</label><br/>
                        <input type="text" placeholder="House no." name='tempPlot' ref={tempplot}onChange={handleInputChange} className="form-control-lg p-2 ms-3"/>
                        <input type="text" placeholder="Street" name='tempStreet' ref={tempstreet}onChange={handleInputChange} className="form-control-lg p-2 ms-3"/>
                        <input type="text" placeholder="City" name='tempCity' ref={tempcity}onChange={handleInputChange} className="form-control-lg p-2 ms-3"/>
                        <input type="text" placeholder="State" name='tempState' ref={tempstate}onChange={handleInputChange} className="form-control-lg p-2 ms-3"/>
                        <input type="text" placeholder="Country" name='tempCountry' ref={tempcountry}onChange={handleInputChange} className="form-control-lg p-2 ms-3"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input"checked={isChecked} 
                        onChange={handleCheckboxChange} id="exampleCheck1" />
                        <label htmlFor="exampleCheck1">Permanant Address same as temporary address</label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-4 fw-semibold mb-2">Permanant Address:</label><br/>
                        <input type="text" placeholder="House no." name='pemtPlot' ref={pemtplot}onChange={handleInputChange} className="form-control-lg p-2 ms-3"/>
                        <input type="text" placeholder="Street" name='pemtStreet'ref={pemtstreet} onChange={handleInputChange} className="form-control-lg p-2 ms-3"/>
                        <input type="text" placeholder="City" name='pemtCity' ref={pemtcity}onChange={handleInputChange} className="form-control-lg p-2 ms-3"/>
                        <input type="text" placeholder="State" name='pemtState' ref={pemtstate}onChange={handleInputChange} className="form-control-lg p-2 ms-3"/>
                        <input type="text" placeholder="Country" name='pemtCountry' ref={pemtcountry}onChange={handleInputChange} className="form-control-lg p-2 ms-3"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-4 fw-semibold">Salary:</label>
                        <input type="text" placeholder="Salary" name='salary' onChange={handleInputChange} className="form-control-lg p-2 ms-3"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-4 fw-semibold">Upload Photo:</label>
                        <input type="file" placeholder="Salary" name='photo' onChange={handleInputChange} className="form-control-lg p-2 ms-3"style={{backgroundColor:'white',border:'1px solid black'}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-4 fw-semibold">Password:</label>
                        <input type="text" placeholder="Password" name='password'onChange={handleInputChange} className="form-control-lg p-2 ms-3"/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={()=>{
                        navigate('/')
                        adddata();
                        }}>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Addnew;