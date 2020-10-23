import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from './reducers';
import { createLogger } from 'redux-logger';

let initialState = 
                    {
                      

                        categories_options:{
                            categories_ids: ['1','2','3'],
                            options_ids: ['11','12', '13', '14', '21', '22', '23', '31', '32', '33', '34']
                        },
                        categories_by_ids:{
                            '1': { 
                                name: 'Portugal', 
                                options: ['11','12', '13', '14']
                            },
                            '2': { 
                                name: 'Nicaragua',
                                options: ['21', '22', '23', '31']
                            },
                            '3': { 
                                name: 'Marshall Islands',
                                options: ['32', '33',]
                            },
                        },
                        options_by_ids:{
                            '11': { id: '11', name: 'Aashiya Jayavant', selected: false},
                            '12': { id: '12',name: 'Luvleen Lawrence', selected: false},
                            '13': { id: '13',name: 'Rey Mibourne', selected: false},
                            '14': { id: '14',name: 'Cayla Brister', selected: false}, 
                            '21': { id: '21',name: 'Deveedas Nandee', selected: false}, 
                            '22': { id: '22',name: 'Obasy Chidy', selected: false}, 
                            '23': { id: '23',name: 'Xenie Dolezelova', selected: false}, 
                            '31': { id: '31',name: 'Ezequiel Dengra', selected: false}, 
                            '32': { id: '32',name: 'Aaron Almaraz', selected: false}, 
                            '33': { id: '33',name: 'Jelena Denisova', selected: false}, 
                        }
                    }

let logger = createLogger()

export const store = createStore(reducers, initialState, 
                                compose(applyMiddleware(
                                        logger), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : f => f) ) 
                                        // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : f => f) ) 