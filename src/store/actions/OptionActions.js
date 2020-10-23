import { ACTIONS } from "../action-constants/Actions";

const OptionToggle = ({id, value})=>{

     return {
         type: ACTIONS.OPTIONS_BY_ID.OPTIONS_BY_ID_TOGGLE ,
         payload:{
             id,
             value
         }
     }
}


export const OptionActions = {OptionToggle}