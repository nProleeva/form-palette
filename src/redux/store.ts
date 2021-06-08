import { handleActions } from 'redux-actions'

type typeAction = 'ADD_COLOR' | 'UPDATE_COLOR' | 'DELETE_COLOR'

export interface infState {
    arrayColor: Array<string>
}

export interface typeAddColor {
    type?: typeAction,
    color:string
}
export interface typeUpdateColor {
    type?: typeAction,
    id:number,
    color:string
}
export interface typeDeleteColor {
    type?: typeAction,
    id:number
}

const ADD_COLOR:typeAction = 'ADD_COLOR',
    UPDATE_COLOR:typeAction = 'UPDATE_COLOR',
    DELETE_COLOR:typeAction = 'DELETE_COLOR';

const addColorAction = (color:string):typeAddColor => ({
    type: ADD_COLOR,
    color
});
const updateColorAction = (id:number,color:string):typeUpdateColor => ({
    type: UPDATE_COLOR,
    id,color
});
const deleteColorAction = (id:number):typeDeleteColor => ({
    type: DELETE_COLOR,
    id
});

const reducer = handleActions<infState>({
    [ADD_COLOR]: (state:infState, action:any) => ({
            arrayColor: state.arrayColor.concat(action.color || '')
    }),
    [UPDATE_COLOR]: (state:infState, action:any) => ({
        arrayColor: state.arrayColor.map((el:string, index:number) => action.id === index ? action.color : el)
    }),
    [DELETE_COLOR]: (state:infState, action:any) => ({
        arrayColor: state.arrayColor.filter((el:string, index:number) => action.id !== index)
    })
}, {
    arrayColor:[]
});

export {addColorAction,updateColorAction,deleteColorAction,reducer}