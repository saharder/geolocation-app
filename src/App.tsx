import Location from "./Location";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Click the button to see your coordinates on the map</h1>
      <Location />
      <h2>If nothing happens, the geolocation api isn't working</h2>
    </div>
  );
}
