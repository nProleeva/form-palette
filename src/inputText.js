import React, {useState} from "react";

const InputText = React.forwardRef((props, ref) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(/[a-z]+/i.exec(event.target.value)||'');
    }

    return (
        <label>
            {props.label}
            <input type="text" value={value} onChange={handleChange.bind(this)} ref={ref} />
        </label>
    );
})

export default InputText