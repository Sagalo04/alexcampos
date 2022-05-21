import { Loading } from "@nextui-org/react";
import React, { useState } from "react";
import "./App.css";
import ModelAR from "./ModelAR";

function MindARViewer(props) {
  const [arrayTarget, setArrayTarget] = useState([]);

  useState(() => {
    let array = [];
    for (let i = 0; i < 20; i++) {
      const element = "targetIndex: " + i;
      array.push(element);
    }
    setArrayTarget(array);
  }, []);

  const URL2 = process.env.PUBLIC_URL + "Models/scenefinal.gltf";
  const URL3 = process.env.PUBLIC_URL + "Models/boton.glb";

  return (
    <>
      <div id="example-scanning-overlay" className="hidden">
        <Loading type="points" />
      </div>
      <a-scene
        mindar-image="uiLoading: #example-scanning-overlay;uiScanning: no; imageTargetSrc: ./targetsTxt.mind"
        cursor="fuse: false; rayOrigin: mouse;"
        // eslint-disable-next-line no-template-curly-in-string
        raycaster="far: ${customFields.libVersion}; objects: .clickable"
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
      >
        <a-assets>
          <a-asset-item id="bearModel" src={URL2}></a-asset-item>
          <a-asset-item id="boton" src={URL3}></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
        {arrayTarget.map((el) => (
          <ModelAR targetIndex={el} key={el}/>
        ))}
      </a-scene>
      {/* <a-scene
        mindar-image="uiLoading: #example-scanning-overlay;uiScanning: no; imageTargetSrc: ./targets.mind"
        cursor="fuse: false; rayOrigin: mouse;"
        // eslint-disable-next-line no-template-curly-in-string
        raycaster="far: ${customFields.libVersion}; objects: .clickable"
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
      >
        <a-assets>
          <a-asset-item id="bearModel" src={URL2}></a-asset-item>
          <a-asset-item id="boton" src={URL3}></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
        {arrayTarget.map((el) => (
          <ModelAR targetIndex={el} key={el}/>
        ))}
      </a-scene> */}
    </>
  );
}

export default MindARViewer;
