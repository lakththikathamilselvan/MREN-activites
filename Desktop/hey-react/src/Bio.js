import React from "react";

function Bio() {
    const firstname = 'Lakththika';
    const lastname = 'Thamilselvan';
    const welbtn = React.createElement(
        "button",
        {
            className: "btn",
            onClick: () => alert("clicked!")
        }, 
        "Click Me"
    )
    return (
        <div>
            <div>{welbtn} </div>
            <h1> My name is {firstname}{lastname} </h1>
        </div>

    );

}

export default Bio;