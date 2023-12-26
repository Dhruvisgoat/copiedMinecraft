import React, { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { RigidBody } from "@react-three/rapier"
// import { useContext } from 'react'
// import { RefContext } from './context/context'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing';

function Sound({ url }) {
  const sound = useRef()
  const { camera } = useThree()
  const [listener] = useState(() => new THREE.AudioListener())
  const buffer = useLoader(THREE.AudioLoader, url)
  useEffect(() => {
    sound.current.setBuffer(buffer)
    sound.current.setRefDistance(1)
    sound.current.setLoop(true)
    sound.current.play()

    // Set the reference distance for reducing volume
    sound.current.setMaxDistance(50);

    // Set the rolloff factor to control volume reduction with distance
    sound.current.setRolloffFactor(10); // You can adjust this value based on your preference

    // Set the distance model to control volume reduction algorithm
    sound.current.setDistanceModel("linear"); // You can experiment with "linear", "inverse", or "exponential"

    camera.add(listener)
    return () => camera.remove(listener)
  }, [])
  return <positionalAudio ref={sound} args={[listener]} />
}

function CoffeShop() {
  // const { showButton, isMuted } = useContext(RefContext);

  const gltf = useLoader(GLTFLoader, "coffee.gltf");

  useEffect(() => {
    // gltf.scene.position.set(49, 0, 20);
    // gltf.scene.scale.set(2.5, 2.5, 2.5);
    // gltf.scene.scale.set(0.02, 0.02, 0.02);
    gltf.scene.rotateY(-Math.PI);
  }, [gltf]);

  const handleClick = () => {
    window.open('https://canteen-proj.web.app', '_blank');
  }
  return (
    <>
      {/* <Suspense fallback={null}>
        <mesh position={[49, -1.65, 20]}>
          {!showButton &&
          <Sound url="/audio/canteen.mp3" />}
        </mesh>
      </Suspense> */}

      <RigidBody colliders="cuboid" position={[49, 0, 20]} >
        <primitive object={gltf.scene}
        // onClick={handleClick}
        />
      </RigidBody>


    </>
  )
}

export default CoffeShop