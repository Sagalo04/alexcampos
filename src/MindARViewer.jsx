import { Link, Loading } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import boton from "./botonRA.png";

function MindARViewer(props) {
  const [isBtn, SetisBtn] = useState(false);

  const sceneRef = useRef(null);
  const sceneRef2 = useRef();
  const sceneRef3 = useRef();
  const sceneRef4 = useRef();
  const sceneRef5 = useRef();

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const sceneEl2 = sceneRef2.current;
    const sceneEl3 = sceneRef3.current;
    const sceneEl4 = sceneRef4.current;
    const sceneEl5 = sceneRef5.current;

    sceneEl.addEventListener("targetFound", () => {
      SetisBtn(true);
    });
    sceneEl2.addEventListener("targetFound", () => {
      SetisBtn(true);
    });
    sceneEl3.addEventListener("targetFound", () => {
      SetisBtn(true);
    });
    sceneEl4.addEventListener("targetFound", () => {
      SetisBtn(true);
    });
    sceneEl5.addEventListener("targetFound", () => {
      SetisBtn(true);
    });

    sceneEl.addEventListener("targetLost", () => {
      SetisBtn(false);
    });
    sceneEl2.addEventListener("targetLost", () => {
      SetisBtn(false);
    });
    sceneEl3.addEventListener("targetLost", () => {
      SetisBtn(false);
    });
    sceneEl4.addEventListener("targetLost", () => {
      SetisBtn(false);
    });
    sceneEl5.addEventListener("targetLost", () => {
      SetisBtn(false);
    });
  }, []);

  const URL2 = process.env.PUBLIC_URL + "Models/scene.gltf";

  return (
    <>
      <div id="example-scanning-overlay" className="hidden">
        <Loading type="points" />
        Cargando
      </div>
      {isBtn ? (
        <div className="buttonContainer">
          <Link href="https://facebook.com">
            <img src={boton} alt="" style={{ height: "85px" }} />
          </Link>
        </div>
      ) : null}

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

        <a-entity ref={sceneRef} mindar-image-target="targetIndex: 0">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="0.025 0.025 0.025"
            src="#bearModel"
          />
        </a-entity>
        <a-entity ref={sceneRef2} mindar-image-target="targetIndex: 1">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="0.025 0.025 0.025"
            src="#bearModel"
          />
        </a-entity>
        <a-entity ref={sceneRef3} mindar-image-target="targetIndex: 2">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="0.025 0.025 0.025"
            src="#bearModel"
          />
        </a-entity>
        <a-entity ref={sceneRef4} mindar-image-target="targetIndex: 3">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="0.025 0.025 0.025"
            src="#bearModel"
          />
        </a-entity>
        <a-entity ref={sceneRef5} mindar-image-target="targetIndex: 4">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="0.025 0.025 0.025"
            src="#bearModel"
          />
        </a-entity>
      </a-scene>
    </>
  );
}

export default MindARViewer;
