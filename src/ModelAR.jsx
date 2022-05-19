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
      <a-text value="Jesús te trae" font="Roboto-Medium-msdf.json" scale="0.32 0.32 0.32" position="-0.2 -0.45 0.1" negate="false"></a-text>
      <a-text value="AGUA VIVA" font="Roboto-Medium-msdf.json" scale="0.32 0.32 0.32" position="-0.18 -0.55 0.1" negate="false"></a-text>
      <a-gltf-model
        class="clickable"
        ref={sceneRef1}
        rotation="0 0 0 "
        position="0 -0.9 0.1"
        scale="0.035 0.035 0.035"
        src="#boton"
      />
    </a-entity>
  );
}

export default ModelAR;
