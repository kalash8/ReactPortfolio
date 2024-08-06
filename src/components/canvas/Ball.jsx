import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

import CanvasLoader from '../Loader'


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float scale={2.5}>
      <ambientLight intensity={0.06}/>
      <directionalLight position={[1, 0, 1]}/>
      <mesh>
        <icosahedronGeometry args={[1, 8]} />
        <meshStandardMaterial 
        polygonOffset
        polygonOffsetFactor={5}
        flatShading />
        <Decal position={[0, 0, 1]}
        flatShading
        rotation={[2 * Math.PI, 0, 0]}
        map={decal}
         />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) =>{
  return (
    <Canvas 
      frameloop="demand"
      shadows
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas