import React, {useEffect, useRef} from "react";

const InputImg  = React.forwardRef((props, fileInput) => {

    const dropArea = useRef(null);

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
        fileInput.current.files = files;
    }
    function preventDefaults (e) {
        e.preventDefault()
        e.stopPropagation()
    }

    return (
        <div ref={dropArea}>
            <label>
                Фото
                <input type="file" accept="image/*" ref={fileInput} required/>
            </label>
        </div>
    );
})

export default InputImg;