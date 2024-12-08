import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'; // Make sure to import the Card component
import Sdata from './Sdata'; // Make sure to import the Sdata array

const App = () => (
  <>
    <h1 className="heading_style">LIST OF TOP 5 NETFLIX SERIES IN 2024</h1>
    {Sdata.map((val) => (
      <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        links={val.links}
      />
    ))}
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
