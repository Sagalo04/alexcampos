import { Loading } from "@nextui-org/react";
import React, { useEffect, useRef } from "react";
import "./App.css";

function MindARViewer(props) {
  const sceneRef1 = useRef();
  const sceneRef2 = useRef();
  const sceneRef3 = useRef();
  const sceneRef4 = useRef();
  const sceneRef5 = useRef();
  const sceneRef6 = useRef();

  useEffect(() => {
    const sceneEl1 = sceneRef1.current;
    const sceneEl2 = sceneRef2.current;
    const sceneEl3 = sceneRef3.current;
    const sceneEl4 = sceneRef4.current;
    const sceneEl5 = sceneRef5.current;
    const sceneEl6 = sceneRef6.current;

    sceneEl1.addEventListener("click", () => {
      window.open("https://facebook.com");
    });
    sceneEl2.addEventListener("click", () => {
      window.open("https://facebook.com");
    });
    sceneEl3.addEventListener("click", () => {
      window.open("https://facebook.com");
    });
    sceneEl4.addEventListener("click", () => {
      window.open("https://facebook.com");
    });
    sceneEl5.addEventListener("click", () => {
      window.open("https://facebook.com");
    });
    sceneEl6.addEventListener("click", () => {
      window.open("https://facebook.com");
    });
  }, []);

  const URL2 = process.env.PUBLIC_URL + "Models/sep.glb";
  const URL3 = process.env.PUBLIC_URL + "Models/button.glb";

  const cilinder = (
    <a-gltf-model
      class="clickable"
      ref={sceneRef1}
      rotation="0 0 0 "
      position="0 -1.1 0"
      scale="0.025 0.025 0.025"
      src="#boton"
    />
  );

  const cilinder1 = (
    <a-gltf-model
      class="clickable"
      ref={sceneRef2}
      rotation="0 0 0 "
      position="0 -1.1 0"
      scale="0.025 0.025 0.025"
      src="#boton"
    />
  );

  const cilinder2 = (
    <a-gltf-model
      class="clickable"
      ref={sceneRef3}
      rotation="0 0 0 "
      position="0 -1.1 0"
      scale="0.025 0.025 0.025"
      src="#boton"
    />
  );

  const cilinder3 = (
    <a-gltf-model
      class="clickable"
      ref={sceneRef4}
      rotation="0 0 0 "
      position="0 -1.1 0"
      scale="0.025 0.025 0.025"
      src="#boton"
    />
  );

  const cilinder4 = (
    <a-gltf-model
      class="clickable"
      ref={sceneRef5}
      rotation="0 0 0 "
      position="0 -1.1 0"
      scale="0.025 0.025 0.025"
      src="#boton"
    />
  );

  const cilinder5 = (
    <a-gltf-model
      class="clickable"
      ref={sceneRef6}
      rotation="0 0 0 "
      position="0 -1.1 0"
      scale="0.025 0.025 0.025"
      src="#boton"
    />
  );

  return (
    <>
      <div id="example-scanning-overlay" className="hidden">
        <Loading type="points" />
      </div>
      <a-scene
        mindar-image="uiLoading: #example-scanning-overlay;uiScanning: no; imageTargetSrc: ./targets.mind"
        cursor="fuse: false; rayOrigin: mouse;"
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

        <a-entity mindar-image-target="targetIndex: 0">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="0.025 0.025 0.025"
            src="#bearModel"
          />
          {cilinder}
          {/* <a-gltf-model
            rotation="0 0 0 "
            position="0 -1.1 0"
            scale="0.025 0.025 0.025"
            src="#boton"
          /> */}
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 1">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="0.025 0.025 0.025"
            src="#bearModel"
          />
          {cilinder1}
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 2">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="0.025 0.025 0.025"
            src="#bearModel"
          />
          {cilinder2}
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 3">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="0.025 0.025 0.025"
            src="#bearModel"
          />
          {cilinder3}
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 4">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="0.025 0.025 0.025"
            src="#bearModel"
          />
          {cilinder4}
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 5">
          <a-gltf-model
            rotation="0 0 0 "
            position="0 -0.25 0"
            scale="0.025 0.025 0.025"
            src="#bearModel"
          />
          {cilinder5}
        </a-entity>
      </a-scene>
    </>
  );
}

export default MindARViewer;
