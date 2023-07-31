import './home.css';
import axios from 'axios';
import { useState, useEffect } from "react";
const Home = () => {
    const [allmessages, setMessages] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3004/messages/1')
            .then(function (response) {
                const sender = response.data.sender;
                const receiver = response.data.receiver;
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <div className="main-screen container-fluid vh-100 m-0">
            <div className="row shadow-lg h-100">
                <div className="currentchat px-4 ">
                    <div>
                        <h3>My frnd</h3>
                        <p className="status text-success">online</p>
                    </div>
                    <div>
                        <img src="" className="videoCall" />
                        <img src="" className="voiceCall" />
                    </div>
                </div>
                {
                    <div className="messages px-5">
                        <div className="send text-end mt-2">
                            <p className="d-inline-block p-2 fs-5 rounded-4"></p>
                        </div>
                        <div className="receive mt-2">
                            <p className="d-inline-block p-2 fs-5 rounded-4"> </p>
                        </div>
                    </div>
                }
                <div className="textfield position-relative">
                    <input type="text" placeholder="type here..." className="form-control-lg w-100 border-0 rounded-5 shadow position-absolute bottom-0
                            start-0" />
                    <img src="./images/smile.png" height="40px" width="40px" className="position-absolute" />
                    <img src="./images/send.png" height="35px" width="35px" className="position-absolute" />
                    <img src="./images/attachment.png" height="35px" width="35px" className="position-absolute" />
                </div>
            </div>
        </div>
    )
}
export default Home;