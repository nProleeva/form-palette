import React, {useRef, useState} from 'react';
import InputText from "./inputText";
import InputImg from "./inputImg";

import './form.scss'

const arrayText=[
    {id:"name", label:"Имя"},
    {id:"surname", label:"Фамилия"},
    {id:"patronymic", label:"Отчество"},
]
function Form() {

    const refImg = useRef(null);
    const refTexts = [useRef(null), useRef(null), useRef(null)];
    const [response, setResponse] = useState('');

    const onSubmit = (event) => {

        let formData = new FormData();

        formData.append("action","send_data");
        formData.append("id", 1); // число 123456 немедленно преобразуется в строку "123456"

        // Файл, выбранный пользователем
        formData.append("image", refImg.current.files[0]);
        formData.append("contact", `[${refTexts.map(el=>el.current.value).toString()}]`);

        console.log(formData);

        fetch('https://test-job.pixli.app/send.php', {
            method: 'POST',
            body: formData
        }).then((res)=> {
            if(res.ok) {
                return res.text();
            }
            return false;
        }).then((text)=> setResponse(text));
        event.preventDefault();
    }

    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                {
                    arrayText.map((el,index)=><InputText ref={refTexts[index]} label={el.label} key={index}/>)
                }
                <InputImg ref={refImg}/>
                <input type="submit" value="Сохранить"/>
            </form>
            <label>
                Response
                <textarea value={response} readOnly></textarea>
            </label>
        </React.Fragment>
    );
}

export default Form;