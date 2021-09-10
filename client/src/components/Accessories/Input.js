import React from 'react'

const Input = ({ type, name, id, classes, placeholder, value, handle, onChange: onChangeHandler }) => {
    if (type !== 'button') {
        let classEl = 'form-control ';
        if (classes)
            classEl += classes;

        return <input onChange={onChangeHandler} value={value} type={type} name={name} id={id} className={classEl} placeholder={placeholder} style={{ borderColor: "rgb(59, 182, 177)", borderRadius: "17px" }} />
    }

    else {
        let classEl = 'btn btn-block login-btn mb-4';
        if (classes)
            classEl = classes;

        return <input value={value} type={type} name={name} id={id} className={classEl} placeholder={placeholder} style={{ background: 'rgb(59, 182, 177)', borderRadius: "17px" }} onClick={handle} />
    }
}

export default Input