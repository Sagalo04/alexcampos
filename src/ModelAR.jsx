import React, { useEffect, useRef } from "react";

function ModelAR({ targetIndex }) {
  const sceneRef1 = useRef();

  useEffect(() => {
    const sceneEl1 = sceneRef1.current;
    sceneEl1.addEventListener("click", () => {
      window.open("https://facebook.com");
    });
  }, []);

  return (
    <a-entity mindar-image-target={targetIndex}>
      <a-gltf-model
        rotation="0 0 0 "
        position="0 -0.25 0"
        scale="0.025 0.025 0.025"
        src="#bearModel"
      />
      <a-text value="Jesús te trae" scale="2 2 1" position="-2 2 -4"></a-text>
      <a-text value="AGUA VIVA" scale="2 2 1" position="-2 2 -4"></a-text>
      <a-gltf-model
        class="clickable"
        ref={sceneRef1}
        rotation="0 0 0 "
        position="0 -1.1 0"
        scale="0.025 0.025 0.025"
        src="#boton"
      />
    </a-entity>
  );
}

export default ModelAR;
