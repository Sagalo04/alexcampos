import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import "./App.css";
import MindARViewer from "./MindARViewer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <MindARViewer />
        <video></video>
      </div>
    </div>
  );
}

export default App;
