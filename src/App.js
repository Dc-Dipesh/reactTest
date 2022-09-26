import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
// function App() {
//   const [data, setdata] = useState(null);
//   const [print, setPrint] = useState(false);
//   function getData(val) {
//     console.warn(val.target.value);
//     setdata(val.target.value);
//   }
//   return (
//     <div className="App">
//       {print ? <h1>{data}</h1> : null}
//       <input type="text" onChange={getData} />
//       <button onClick={() => setPrint(true)}>Print Data</button>
//     </div>
//   );
// }
function App() {
  const [status, setStatus] = React.useState(true);
  return (
    <div className="App">
      {status ? <h1>Hello world</h1> : null}

      {/* <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button> */}
      <button onClick={() => setStatus(!status)}>Toggle</button>
    </div>
  );
}

export default App;
