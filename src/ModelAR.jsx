import React, { useEffect, useRef } from "react";

function ModelAR({ targetIndex }) {
  const sceneRef1 = useRef();

  useEffect(() => {
    const sceneEl1 = sceneRef1.current;
    sceneEl1.addEventListener("click", () => {
      window.open("https://youtu.be/1dwHcIATYKc");
    });
  }, []);

  return (
    <a-entity mindar-image-target={targetIndex}>
      <a-gltf-model
        rotation="0 0 0 "
        position="0 -0.25 0"
        scale="0.05 0.05 0.05"
        src="#bearModel"
      />
      <a-text value="Jesús te trae" color="#f2eccd" font="Roboto-Medium-msdf.json" scale="0.6 0.6 0.6" position="-0.4 -0.75 0.1" negate="false"></a-text>
      <a-text value="AGUA VIVA" color="#f2eccd" font="Roboto-Medium-msdf.json" scale="0.6 0.6 0.6" position="-0.35 -0.9 0.1" negate="false"></a-text>
      <a-gltf-model
        class="clickable"
        ref={sceneRef1}
        rotation="0 0 0 "
        position="0 -1.5 0.1"
        scale="0.06 0.06 0.06"
        src="#boton"
      />
    </a-entity>
  );
}

export default ModelAR;
