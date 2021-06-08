import React, {useState} from 'react';

import InputColor from "./inputColor";
import { connect } from 'react-redux';
import './palette.scss';
import {addColorAction} from "./redux/store";
import type {infState,typeAddColor} from "./redux/store";

interface DispatchProps {
    addColor:(color:string)=>typeAddColor
}

type Props = DispatchProps & infState

function Palette(props:Props) {
    const [idNew, setIdNew] = useState<number|null>(null);

    const clickAdd = () => {
        setIdNew(props.arrayColor.length);
        props.addColor("#ffffff");
    }
    return (
        <div className="palette">
            {
                props.arrayColor&&props.arrayColor.map((color:string,index:number)=><InputColor color={color} id={index} key={index} click={index===idNew}/>)
            }
            <button onClick={clickAdd}>Добавить цвет</button>
        </div>
    );
}

export default connect(((state:infState):infState =>({
    arrayColor:state.arrayColor,
})),{
    addColor: addColorAction
})(Palette);