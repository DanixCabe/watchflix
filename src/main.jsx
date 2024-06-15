import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import 'animate.css';
import './index.css'
import '../public/sass/style.scss'
import { MoviesApp } from './MoviesApp.jsx'
import { store } from './store'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <MoviesApp/>
        </Provider>
    </React.StrictMode>,
)
