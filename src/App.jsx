import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import "./Styles.css";

function App() {
  const [starShips, setStarShips] = useState([]);

  async function fetchingData() {
    const url = "https://swapi.dev/api/starships/";
    const response = await fetch(url);
    const data = await response.json();
    setStarShips(data.results);
    // console.log(starShips);
  }

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div>
      <h1 className="Nav">Star Wars Star Ships</h1>
      <NavBar data={starShips} />
    </div>
  );
}

export default App;
