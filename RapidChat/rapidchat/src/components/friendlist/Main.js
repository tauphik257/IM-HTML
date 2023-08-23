import React, { useEffect, useState } from 'react';
import './main.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const Main = () => {

    const [data, setData] = useState([]);
    const [filtereData, setFiltereData] = useState([]);
    const [showLargeImage, setShowLargeImage] = useState(false);
    const [largeImageSrc, setLargeImageSrc] = useState('');

    useEffect(() => {
        axios
            .get("http://localhost:3004/data")
            .then(function (response) {
                setData(response.data);
                setFiltereData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    const SearchHandle = (e) => {
        const inputValues = e.target.value.toLowerCase();

        const update = data.filter((item) => {
            const dataName = item.name.toLowerCase();

            return dataName.includes(inputValues);
        });

        setFiltereData(update);

    };

    const SizeHandle = (imageSrc) => {
        setShowLargeImage(true);
        setLargeImageSrc(imageSrc);
    };

    const hideLargeImage = () => {
        setShowLargeImage(false);
    };

    return (
        <>
            <div className='d-flex'>
                <div className='container-width bg-paleblue pt-3'>
                    <div>
                        <input className="form-control me-2 rounded-pill" type="search" placeholder="Search.." aria-label="Search" onChange={SearchHandle} />
                        <hr className='mb-0' />
                    </div>
                    <div className='list'>
                    {filtereData.map((obj, index) => (
                        <div>
                            <div className='px-2 pt-1 d-flex pointer section'>
                                <img className='me-2 img-size rounded-circle ' src={obj.image} alt="profile-1" onClick={() => SizeHandle(obj.image)} />
                                <div className='ms-2 w-100'>
                                    <div className='d-flex justify-content-between'>
                                        <h5 className=''>{obj.name}</h5>
                                        <p className='timefont-size mt-1'>{obj.time}</p>
                                    </div>
                                    <p className='lh-1'>{obj.recent}</p>
                                </div>
                            </div>
                            <hr className='w-100 my-0' />
                        </div>
                    ))}
                    </div>
                </div>
            </div>

             {/* popup image */}

             {showLargeImage && (
                <div className='modal-container' onClick={hideLargeImage}>
                    <div className='modal-content'>
                        <img src={largeImageSrc} alt='Large size' />
                    </div>
                </div>
            )}
        </>
    )
}

export default Main;