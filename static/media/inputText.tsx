import React, {ForwardedRef, useState} from "react";

interface infPropsInputText {
    label:string
}

const InputText = React.forwardRef<HTMLInputElement, infPropsInputText>((props:infPropsInputText, ref:ForwardedRef<HTMLInputElement>) => {
    const [value, setValue] = useState<string>('');

    function handleChange(event:React.ChangeEvent<HTMLInputElement>):void {
        setValue((/[a-z]+/i.exec(event.target.value) as string|null)||'');
    }

    return (
        <label>
            {props.label}
            <input type="text" value={value} onChange={handleChange} ref={ref} />
        </label>
    );
})

export default InputText