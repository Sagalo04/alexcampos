import { Loading } from "@nextui-org/react";
import React, { useEffect, useRef } from "react";
import "./App.css";
function MindARViewer(props) {
  //   const sceneRef = useRef(null);
  //
  //   useEffect(() => {
  //     const sceneEl = sceneRef.current;
  //     const arSystem = sceneEl.systems["mindar-image-system"];
  //     sceneEl.addEventListener("renderstart", () => {
  //       arSystem.start(); // start AR
  //     });
  //     return () => {
  //       arSystem.stop();
  //     };
  //   }, []);
  const URL2 = process.env.PUBLIC_URL + "finalscene.glb";

  return (
    <>
      <div id="example-scanning-overlay" className="hidden">
        <Loading type="points" />Cargando
      </div>
      <a-scene
        mindar-image="uiLoading: #example-scanning-overlay;uiScanning: no; imageTargetSrc: ./targets.mind"
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
      >
        <a-assets>
          <a-asset-item id="bearModel" src={URL2}></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="0.005 0.005 0.005"
            src="#bearModel"
          />
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 1">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="0.005 0.005 0.005"
            src="#bearModel"
          />
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 2">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="0.005 0.005 0.005"
            src="#bearModel"
          />
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 3">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="0.005 0.005 0.005"
            src="#bearModel"
          />
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 4">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="0.005 0.005 0.005"
            src="#bearModel"
          />
        </a-entity>
      </a-scene>
    </>
  );
}

export default MindARViewer;
