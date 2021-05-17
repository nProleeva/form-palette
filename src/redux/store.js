import { handleActions } from 'redux-actions'

const ADD_COLOR = 'ADD_COLOR',
    UPDATE_COLOR = 'UPDATE_COLOR',
    DELETE_COLOR = 'DELETE_COLOR';

const addColorAction = (color) => ({
    type: ADD_COLOR,
    color
});
const updateColorAction = (id,color) => ({
    type: UPDATE_COLOR,
    id,color
});
const deleteColorAction = (id) => ({
    type: DELETE_COLOR,
    id
});

const reducer = handleActions({
    [ADD_COLOR]: (state, action) => ({
        arrayColor: state.arrayColor.concat(action.color)
    }),
    [UPDATE_COLOR]: (state, action) => ({
        arrayColor: state.arrayColor.map((el, index) => action.id === index ? action.color : el)
    }),
    [DELETE_COLOR]: (state, action) => ({
        arrayColor: state.arrayColor.filter((el, index) => action.id !== index)
    })
}, {
    arrayColor:[]
});

export {addColorAction,updateColorAction,deleteColorAction,reducer}