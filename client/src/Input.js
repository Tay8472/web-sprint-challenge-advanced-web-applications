import React, {useState} from 'react';

const Input = (initialState) => {
    const [state,setState] = useState(initialState)
    const handleChange = updatedValue => {
        setState(updatedValue)
        console.log(state)
    }
    return [state,setState,handleChange]
}

export default Input;