import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase_setup/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));

initializeApp(firebaseConfig)

root.render(
  <div>
    <App />
  </div>
);
