import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Bio from './Bio';
import UpdatePage from './UpdatePage'; 
import Count from './Count';
import ReactList from './ReactList';

const root = ReactDOM.createRoot(document.getElementById("root"));
//import UpdatePage from './UpdatePage';

// root.render( <App />);
root.render( <Bio />);
root.render(<UpdatePage/>);
root.render(<Count/>);
root.render( <ReactList/>);