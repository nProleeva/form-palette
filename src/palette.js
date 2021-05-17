import {useState} from 'react';

import InputColor from "./inputColor";
import { connect } from 'react-redux';
import './palette.scss';
import {addColorAction} from "./redux/store";

function Palette(props) {
    const [idNew, setIdNew] = useState(0);

    const clickAdd = () => {
        setIdNew(props.arrayColor.length);
        props.addColor("#ffffff");
    }
    return (
        <div className="palette">
            {
                props.arrayColor&&props.arrayColor.map((color,index)=><InputColor color={color} id={index} key={index} click={index===idNew}/>)
            }
            <button onClick={clickAdd}>Добавить цвет</button>
        </div>
    );
}

export default connect((state =>({
    arrayColor:state.arrayColor,
})),{
    addColor: addColorAction
})(Palette);