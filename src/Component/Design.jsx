import React from 'react';
import "./Design.css";

function Design() {
    return (
        <div>
            <h1>Stop Watch</h1>
            <div className="Timer">

            </div>
            <div className="timerButton">
                <button>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        </div>
    )
}

export default Design;