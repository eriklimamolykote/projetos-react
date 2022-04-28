import React from 'react';
import ReactDOM from 'react-dom';
import COMP_LIFE from './complife.jsx';
import Form from './form.jsx';
import EventTest from './events.jsx';
import Hello_comp from './addstyle.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <COMP_LIFE />,
  <Form />,
  <EventTest />,
  Hello_comp,
  document.getElementById('root')
);