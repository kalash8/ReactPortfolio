import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useHelper } from "@react-three/drei";
// import { OrbitControls as ThreeOrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { extend, useThree, useFrame } from "@react-three/fiber";
import { BoxHelper } from "three";
import CanvasLoader from '../Loader';




const Computers = ({ isMobile }) => {
  const { scene } = useGLTF('/react_logo_circle/scene.gltf');
  // const {scene} = useGLTF('/desktop_pc/scene.gltf');
  
  useEffect(() => {
    if (scene) {
      console.log('GLTF model loaded:', scene);
      console.log('Materials:', scene.materials);
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      // const helper = new BoxHelper(scene, 0xff0000);
      // scene.add(helper);
    }
  }, [scene]);

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="black" />
      {/* <pointLight intensity={50} /> */}
      <spotLight 
        position={[1, 1, 1]} 
        angle={3}
        penumbra={80}
        intensity={100}
        castShadow
      />
      {scene && (
        <primitive
          object={scene}
          scale={isMobile ? 1 : 3.35}
          position={[0, 0, 0]}  // Adjust based on model size
          rotation={[0, 0.83, 0]}  // Adjust rotation as needed

          // scale={isMobile ? 0.7 : 0.75}
          // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          // rotation={[-0.01, -0.2, -0.1]} 
        />
      )}
    </mesh>
  );
};
// extend({ OrbitControls: ThreeOrbitControls });
// const OrbitControls = (props) => {
//   const { camera, gl } = useThree();
//   const controlsRef = React.useRef();

//   useFrame(() => controlsRef.current?.update());

//   useEffect(() => {
//     const controls = controlsRef.current;
//     if (controls) {
//       // Customize the controls or add passive event listeners here
//       controls.addEventListener('wheel', (event) => {
//         // Mark this event listener as passive
//         event.preventDefault();
//       }, { passive: true });
//     }
//   }, [controlsRef]);

//   return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} {...props} />;
// };

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas 
      frameloop="demand"
      shadows
      camera={{ position: [10, 10, 10], fov:850 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.1} />
        <directionalLight 
          position={[-10, -10, -10]} 
          intensity={1}
          castShadow 
        />
        {/* <spotLight 
          position={[10, 4, 10]} 
          angle={1}
          penumbra={2}
          intensity={800}
          castShadow
        /> */}
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;