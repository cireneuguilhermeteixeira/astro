import React, { useState } from "react";


const MyReactComponent = (props) => {
    const [value, setValue] = useState(0);

    const onClickButton = (e) => {
        console.log(e);
        setValue(value + 1);
    }

    return (
        <>

            <h1>
                Hello, I'm a react component. Value: {value}
            </h1>

            <button
                onClick={onClickButton}
            >
                increase value
            </button>
        </>
    );
};

export default MyReactComponent;