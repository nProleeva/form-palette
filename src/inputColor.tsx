import React, {useState, useEffect, useRef} from 'react';
import {connect} from "react-redux";
import {updateColorAction, deleteColorAction} from "./redux/store";
import type {typeUpdateColor, typeDeleteColor} from "./redux/store";

interface StateProps {
    color:string,
    click?:boolean,
    id: number
}

interface DispatchProps {
    updateColor:(id:number,color:string)=>typeUpdateColor,
    deleteColor:(id:number)=>typeDeleteColor
}

function InputColor(props:DispatchProps & StateProps){
    const [color,setColor] = useState<string>(props.color);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const refColor = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        setColor(props.color);
        document.addEventListener('mouseup',handleMouseUp,false);

        return document.removeEventListener('mouseup',handleMouseUp,false);
    },[props]);

    useEffect(()=>{
        if(props.click) {
            refColor.current?.click();
            setIsOpen(true);
        }
    },[props.click])

    function handleChange(event:React.ChangeEvent<HTMLInputElement>):void {
        setColor( event.target.value);
        setIsOpen(true);
        props.updateColor(props.id, event.target.value);
    }
    function clickDelete():void {
        props.deleteColor(props.id);
    }
    function handleMouseUp():void {
        if(isOpen) {
            refColor.current?.setAttribute('type','text');
            refColor.current?.setAttribute('type','color');
            setIsOpen(false);
        }
    }

    return (
        <div className="containerColor">
            <input type="color" value={color} onChange={handleChange} ref={refColor}/>
            <button className="delete" onClick={clickDelete}>x</button>
        </div>
    );
}

export default connect(null, {
    updateColor: updateColorAction,
    deleteColor: deleteColorAction
})(InputColor);