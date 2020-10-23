import { combineReducers } from 'redux';
import { categoryByIdsReducer } from './category-by-ids-reducer';
import { categoryReducer } from './category-reducer';
import { optionsByIdsReducer } from './options-by-ids-reducer';


export const reducers = combineReducers({
                            categories_options: categoryReducer,
                            categories_by_ids: categoryByIdsReducer,
                            options_by_ids: optionsByIdsReducer
                            })