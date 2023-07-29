import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';



const ChatDisplay = () => {


    return (
        <>
            <div className='d-flex '>
                <h1 className="w-chat">Name</h1>
                <div className='mt-3'>
                    <FontAwesomeIcon className='fs-5 mx-4' icon={faVideo} />
                    <FontAwesomeIcon className='fs-5 mx-2' icon={faPhone} />
                </div>

            </div>
        </>
    )
};

export default ChatDisplay;