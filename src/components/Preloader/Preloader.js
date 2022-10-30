import React from 'react'
import '../Preloader/Preloader.css'

function Preloader({ isLoading }) {
    return (
        <div className={`preloader ${!isLoading ? 'preloader_opened' : ''}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
