import { combineReducers } from 'redux';
import { categoryByIdsReducer } from './category-by-ids-reducer';
import { categoryReducer } from './category-reducer';
import { optionsByIdsReducer } from './options-by-ids-reducer';
import { reducer as formReducer } from 'redux-form'
 

export const reducers = combineReducers({
                            categories_options: categoryReducer,
                            categories_by_ids: categoryByIdsReducer,
                            options_by_ids: optionsByIdsReducer,
                            form: formReducer
                            })