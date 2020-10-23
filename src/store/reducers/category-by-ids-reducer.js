import { ACTIONS } from "../action-constants/Actions";


export const categoryByIdsReducer= (state={},action={})=>{

    switch(action.type){

        case ACTIONS.CATEGORY.CATEGORY_ADD:{

            let newState = {...{},...state}
            
            newState.isLogging = true
            newState.success = false
            newState.error =   null        
            newState.token = null

            
            return {...newState};
        }

        case ACTIONS.CATEGORY.CATEGORY_DELETE:{

            let {  result } = action.payload;
            
            let newState = {...{}, ...state}

            
            newState.isLogging = false;
            newState.success = true
            newState.error =   null            
            
            return {...newState};

        }
        case ACTIONS.CATEGORY.CATEGORY_EDIT:{

            let {  error } = action.payload

            let newState = {...{}, ...state}
            
            newState.isLogging = false;
            newState.success = false
            newState.token =   null
            newState.error =   error.message


            return {...newState};
            
        }
        default :{

            return state;
        }
    }
} 