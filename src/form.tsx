import React, {useRef, useState} from 'react';
import InputText from "./inputText";
import InputImg from "./inputImg";

import './form.scss'

interface infArrayText {
    id: string,
    label: string
}

const arrayText:Array<infArrayText>=[
    {id:"name", label:"Имя"},
    {id:"surname", label:"Фамилия"},
    {id:"patronymic", label:"Отчество"},
]
const Form:React.FC<{}> = () => {

    const refImg = useRef<HTMLInputElement>(null);
    const refTexts = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
    const [response, setResponse] = useState<string>('');

    const onSubmit:(event:React.FormEvent<HTMLFormElement>)=>void = (event:React.FormEvent<HTMLFormElement>) => {

        let formData:FormData = new FormData();

        formData.append("action","send_data");
        formData.append("id", "1");
        let arrayFile:FileList|Array<string> = refImg.current?.files||[''];
        formData.append('image', arrayFile[0]);
        formData.append("contact", `[${refTexts.map((el:React.RefObject<HTMLInputElement>)=>el.current?.value.toString())}]`);

        fetch('https://test-job.pixli.app/send.php', {
            method: 'POST',
            body: formData
        }).then((res:Response)=> {
            if(res.ok) {
               return res.text();
            }
            return '';
        }).then((text:string) => setResponse(text))
        event.preventDefault();
    }

    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                {
                    arrayText.map((el:infArrayText,index:number)=><InputText ref={refTexts[index]} label={el.label} key={index}/>)
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