// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PhoneList />
    </div>
  );
}

function PhoneList() {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/mobiles")
      .then((response) => response.json())
      .then((data) => setMobiles(data));
  }, []);

  return (
    <div className="mobile-list-container">
      {mobiles.map((mobile) => (
        <Phone key={mobile.company} mobile={mobile} />
      ))}
    </div>
  );
}

function Phone({ mobile }) {
  return (
    <div className="mobile-container">
      <img src={mobile.img} alt={mobile.img} className="mobile-picture"></img>
      <h1 className="mobile-model">{mobile.model}</h1>
      <p className="mobile-company">{mobile.company}</p>
    </div>
  );
}
export default App;
