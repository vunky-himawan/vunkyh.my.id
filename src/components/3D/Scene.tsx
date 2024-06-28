import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useEffect, useState } from "react";
import Model from "./Model";

const Scene = () => {
  const [webglEnabled, setWebglEnabled] = useState(true);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2");
    if (!gl) {
      console.warn(
        "WebGL2 is not supported. Falling back to WebGL1 if possible."
      );
      setWebglEnabled(false);
    }
  }, []);

  return (
    <>
      {webglEnabled ? (
        <Canvas style={{ width: "100%", height: "25rem" }} >
          <directionalLight intensity={3} position={[0, 3, 2]} />
          <Environment preset="dawn"  />
          <Model />
        </Canvas>
      ) : (
        <div>
          WebGL2 is not supported on this device. Please try a different browser
          or update your graphics drivers.
        </div>
      )}
    </>
  );
};

export default Scene;
