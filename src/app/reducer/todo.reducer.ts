import { ActionParent } from "../actions/todo.actions";
import { Todo } from "../model/todo";

export const initialState : Todo[] = [
    {title: 'Todo 1'},
    {title: 'Todo 2'},
    {title: 'Todo 3'}
]

export function TodoReducer(state = initialState, action: ActionParent){
    switch(action.type){        
        default: state;
    }
    console.log("state", state);

}