import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

export const reducers = combineReducers({
                                        form: reduxFormReducer, // mounted under "form",
                                    })