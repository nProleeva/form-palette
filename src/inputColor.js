import React, {useState, useEffect, useRef} from 'react';
import {connect} from "react-redux";
import {updateColorAction, deleteColorAction} from "./redux/store";

function InputColor(props) {
    const [color,setColor] = useState(props.color);
    const [isOpen, setIsOpen] = useState(false);
    const refColor = useRef(null);

    useEffect(()=>{
        setColor(props.color);
        document.addEventListener('mouseup',handleMouseUp,false);

        return document.removeEventListener('mouseup',handleMouseUp,false);
    },[props]);

    useEffect(()=>{
        if(props.click) {
            refColor.current.click();
            setIsOpen(true);
        }
    },[props.click])

    function handleChange(event) {
        setColor( event.target.value);
        setIsOpen(true);
        props.updateColor(props.id, event.target.value);
    }
    function handleMouseUp() {
        if(isOpen) {
            refColor.current.setAttribute('type','text');
            refColor.current.setAttribute('type','color');
            setIsOpen(false);
        }
    }

    return (
        <div className="containerColor">
            <input type="color" value={color} onChange={handleChange} ref={refColor}/>
            <button className="delete" onClick={props.deleteColor.bind(this,props.id)}>x</button>
        </div>
    );
}

export default connect(null, {
    updateColor: updateColorAction,
    deleteColor: deleteColorAction
})(InputColor);