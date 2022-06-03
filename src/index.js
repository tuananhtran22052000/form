import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from './App';
import Home from './Home'
import Effect from './Home/components/Effect' 
import TestEffecct from './TestEffect';
import CopyTests from './CopyTest'
import Default from '../src/Home/HomeRouter/Default'
  
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Default />
    {/* <TestPropsType 
      type={"password"}
      text={'123'}
      number={456}
    /> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
