import React, { Component, useState, useEffect } from 'react';
import './index.css';
import data from './data/data';

function Input(props) {
  const [value, setValue] = useState("");
  const [showSuggestion, setShow] = useState(false);

  const inputHandler = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    setShow(true);
  };

  const autoComplete = (sugg, input) => (sugg.filter(s => s.toLowerCase().includes(input.toLowerCase())));
  const autoCompleteCheck = (sugg, input) => (sugg.filter(s => s.toLowerCase().includes(input.toLowerCase())) == input.toLowerCase());

  const matchedSugg = autoComplete(props.suggestions, value);
  const check = autoCompleteCheck(props.suggestions, value);

  const song = matchedSugg.map((item) => <li>{item}</li>);

  return (
    <div className="Input">
      <h1>Find your favorite Queen song!</h1>
      <h1>🕺</h1>
      <input value={value} onChange={inputHandler} className="search" />
      <ul className="suggestionList">{showSuggestion && value!="" ? song : null}</ul>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input suggestions={data} />
      </div>
    );
  }
}

export default App;
