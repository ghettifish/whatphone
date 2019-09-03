import React from 'react';
import './App.css';

function getPhone() {
  let useragent = navigator.userAgent;
  let regex = /((\().+?(\)))/;
  
  let pattern = useragent.match(regex)[0]
  pattern = pattern.substring(1, pattern.length-1);
  let arr = pattern.split("; ");
  console.log(arr);
  switch(arr[0]) {
    case "Linux":
      return arr[2];
    case "iPhone":
      return "iPhone - Model info unavailable";
    default :
      return pattern;
  }

}


function App() {
  console.log(getPhone());
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{fontSize: 24, margin: 0}}>You have a:</h1>
        <h3 style={{fontSize: 42, margin: 0, color: "#209054"}}>
            {getPhone()}
        </h3>
        <p style={{fontSize: 12}}>
          <strong>useragent: </strong>{navigator.userAgent}
        </p>
      </header>
    </div>
  );
}

export default App;
