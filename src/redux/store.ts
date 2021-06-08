import {handleActions, createAction, Action} from 'redux-actions'

type typeType = 'ADD_COLOR' | 'UPDATE_COLOR' | 'DELETE_COLOR';
type typeAction = string|typeUpdateColor|number;

export interface infState {
    arrayColor: Array<string>
}

export interface typeUpdateColor {
    id:number,
    color:string
}
const ADD_COLOR:typeType = 'ADD_COLOR',
    UPDATE_COLOR:typeType = 'UPDATE_COLOR',
    DELETE_COLOR:typeType = 'DELETE_COLOR';

const addColorAction:(color:string)=>Action<string> = createAction(ADD_COLOR);
const updateColorAction:(id:number,color:string)=>Action<typeUpdateColor> = createAction(UPDATE_COLOR,(id:number,color:string) => ({ id,color }));
const deleteColorAction:(id:number)=>Action<number> = createAction(DELETE_COLOR);

const reducer = handleActions<infState, typeAction>(
    {
        ADD_COLOR: (state:infState, action:Action<typeAction>) => ({
           arrayColor: state.arrayColor.concat(action.payload as string || '')
        }),
        UPDATE_COLOR: (state:infState, action:Action<typeAction>) => {
            const {id,color} = action.payload as typeUpdateColor;
            return {
                arrayColor: state.arrayColor.map((el: string, index: number) => id === index ? color : el)
            }
        },
        DELETE_COLOR: (state:infState, action:Action<typeAction>) => ({
            arrayColor: state.arrayColor.filter((el:string, index:number) => action.payload as number !== index)
        })
    },
    { arrayColor:[] }
);

export {addColorAction,updateColorAction,deleteColorAction,reducer}