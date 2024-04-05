import React from 'react';
import ReactDOM from 'react-dom/client';


const anotherElement = (
  <h1>blue</h1>)

  
const anotherElement1 = (
  <h1>blue1</h1>)

  const text = React.createElement(
    'h1',
    null,
    "hello spsss"
  )

  const id = "hello"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<h1>Hello {id}</h1>
</>    
);


