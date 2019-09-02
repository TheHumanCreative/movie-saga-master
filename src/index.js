import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_DETAILS', fetchDetails); //SET_DETAILS
    yield takeEvery('FETCH_GENRES', fetchGenres); //SET_GENRES
    yield takeEvery('FETCH_MOVIES', fetchMovies); //SET_MOVIES
}

function* fetchDetails(action) {
    console.log('fetching details GET:'/ action);
    
    try{
        let response = yield axios.get(`/details/${action.payload}`);
        yield console.log('details saga GET response', response.data);
        yield put ({
            type: 'SET_DETAILS',
            payload: response.data
        });
    }catch (error) {
        yield console.log('error details GET', error);
            
        
    }
}

function* fetchGenres(action) {
    console.log('fetching genres GET:', action);
    
    try{
        let response = yield axios.get(`/genres/${action.payload}`);
        yield console.log('genres saga GET response', response.data);
        yield put ({
            type: 'SET_GENRES',
            payload: response.data
        });
    }catch (error) {
        yield console.log('error genres GET', error);
        
    }
}

function* fetchMovies(action) {
    console.log('fetching movies GET:', action);
    
    try{
        let response = yield axios.get('/home')
        yield console.log(response);
        yield put ({
            type: 'SET_MOVIES',
            payload: response.data
        });
    }catch (error) {
        yield console.log('error with GET on fetchMovies', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        moviesReducer,
        genresReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
