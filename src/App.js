import React from "react";
import "./App.css";
import Card from "./Card";
import Sdata from "./Sdata";

const App = () => {
  return (
    <div className="app">
      <h1 className="heading">Top 5 Netflix Series</h1>
      <div className="card-container">
        {Sdata.map((series) => (
          <Card
            key={series.id}
            imgsrc={series.imgsrc}
            title={series.title}
            sname={series.sname}
            links={series.links}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
