import React, {useState, useEffect, useRef} from "react";
import { ReactComponent as Svg } from "./photo_camera_black_24dp.svg";

const InputImg  = React.forwardRef((props, fileInput) => {

    const dropArea = useRef(null);
    const [fileName, setFileName] = useState(null);

    useEffect(()=>{
        if(dropArea.current) {
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                dropArea.current.addEventListener(eventName, preventDefaults, false)
            });
            dropArea.current.addEventListener('drop', handleDrop, false);
        }

        return () => {
            if(dropArea.current) {
                ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                    dropArea.current.removeEventListener(eventName, preventDefaults, false);
                });
                dropArea.current.removeEventListener('drop', handleDrop, false);
            }
        }
    },[dropArea])

    function handleDrop(e) {
        let files = e.dataTransfer.files;
        setFileName(files[0].name);
        fileInput.current.files = files;
    }

    function handleChange() {
        setFileName(fileInput.current.files[0].name);
    }
    function preventDefaults (e) {
        e.preventDefault()
        e.stopPropagation()
    }

    return (
        <div ref={dropArea} className="dropArea">
            Фото
            <label>
                <i className="material-icons"><Svg>photo_camera</Svg></i>
                <span className="title">{fileName?fileName:"Добавить файл"}</span>
                <input type="file" accept="image/*" ref={fileInput} onChange={handleChange} required/>
            </label>
        </div>
    );
})

export default InputImg;