import React, {useState, useEffect, useRef, ForwardedRef} from "react";
import { ReactComponent as Svg } from "./photo_camera_black_24dp.svg";

type typeDrag = 'dragenter'|'dragover'|'dragleave';

const InputImg = React.forwardRef<HTMLInputElement>((props:{}, inputFile:ForwardedRef<HTMLInputElement>) => {

    const dropArea = useRef<HTMLDivElement>(null);
    const refImg = useRef<HTMLImageElement>(null);
    const [fileName, setFileName] = useState<string>();

    useEffect(()=>{
        let arrayType:Array<typeDrag> = ['dragenter','dragover','dragleave']
        if(dropArea.current) {
            arrayType.forEach((type:typeDrag)=>{
                dropArea.current?.addEventListener(type,preventDefaults, false);
            })
        }

        return () => {
            if(dropArea.current) {
                arrayType.forEach((type:typeDrag)=>{
                    dropArea.current?.removeEventListener(type,preventDefaults, false);
                })
            }
        }
    },[dropArea])

    function handleDrop(ev:React.DragEvent<HTMLDivElement>):void {
        let files:FileList = ev.dataTransfer.files;
        if (typeof inputFile === 'object' && inputFile?.current) {
            setFileName(files[0].name);
            inputFile.current.files = files;
            addImage(files[0]);
        }
        ev.preventDefault();
        ev.stopPropagation();
    }

    function handleChange():void {
        if (typeof inputFile === 'object' && inputFile?.current) {
            setFileName((inputFile.current.files as FileList)[0].name);
            addImage((inputFile.current.files as FileList)[0]);
        }
    }

    function addImage(file:File):void {
        let reader = new FileReader();
        reader.onload = function() {
            if (typeof refImg === 'object' && refImg?.current && typeof reader.result === 'string') {
                refImg.current.src = reader.result;
            }
        };
        reader.readAsDataURL(file);
    }
    function preventDefaults(e:DragEvent):void {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <div ref={dropArea} className="dropArea" onDrop={handleDrop}>
            Фото
            <label>
                <i className="material-icons"><Svg>photo_camera</Svg></i>
                <span className="title">{fileName?fileName:"Добавить файл"}</span>
                <input type="file" accept="image/*" ref={inputFile} onChange={handleChange} required/>
                <img ref={refImg}/>
            </label>
        </div>
    );
});

export default InputImg;