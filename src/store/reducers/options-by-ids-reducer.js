import { ACTIONS } from "../action-constants/Actions";


export const optionsByIdsReducer= (state={},action={})=>{

    switch(action.type){

        case ACTIONS.OPTIONS_BY_ID.OPTIONS_BY_ID_ADD:{

            let newState = {...{},...state}
            
            newState.isLogging = true
            newState.success = false
            newState.error =   null        
            newState.token = null

            
            return {...newState};
        }

        case ACTIONS.OPTIONS_BY_ID.OPTIONS_BY_ID_DELETE:{

            let {  result } = action.payload;
            
            let newState = {...{}, ...state}

            
            newState.isLogging = false;
            newState.success = true
            newState.error =   null            
            
            return {...newState};

        }
        case ACTIONS.OPTIONS_BY_ID.OPTIONS_BY_ID_EDIT:{

            let {  result } = action.payload;
            
            let newState = {...{}, ...state}

            
            newState.isLogging = false;
            newState.success = true
            newState.error =   null            
            
            return {...newState};

        }
        case ACTIONS.OPTIONS_BY_ID.OPTIONS_BY_ID_TOGGLE:{

            let {  id, value } = action.payload

            let newState = {...{}, ...state}

            let option = newState[id];

            option.selected = value

            newState[id] = option;

            return {...newState};
            
        }
        default :{

            return state;
        }
    }
} 