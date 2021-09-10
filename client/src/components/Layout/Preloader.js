import React from 'react'

const Preloder = () => {
    return (
        <div id="loading" style={{background:"rgb(59, 182, 177)"}}>
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div className="object" id="object_one"></div>
                    <div className="object" id="object_two"></div>
                    <div className="object" id="object_three"></div>
                    <div className="object" id="object_four"></div>
                </div>
            </div>
        </div>
    )
}

export default Preloder

