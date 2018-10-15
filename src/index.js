import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore , applyMiddleware  , compose} from 'redux';
import  rootReducer  from './store/reducers/rootReducer.js';
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk';
import { reduxFirestore , getFirestore } from 'redux-firestore';
import { reactReduxFirebase ,getFirebase } from 'react-redux-firebase';
import fcConfig from './config/fbConfig.js';

const store = createStore(rootReducer ,
        compose(
            applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
            reduxFirestore(fcConfig),
            reactReduxFirebase(fcConfig)
        )
    );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
