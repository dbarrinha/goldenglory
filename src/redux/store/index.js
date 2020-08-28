import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import user from '../reducers/userReducer';

const reducers = combineReducers({
    user,
});
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)
export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
