import { Canvas } from "@react-three/fiber"
import { Sky, PointerLockControls, KeyboardControls, FirstPersonControls, OrbitControls } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Ground } from "./Ground"
import { Player } from "./Player"
import { Cube, Cubes } from "./Cube"
import { BrowserView, MobileView } from 'react-device-detect';
import ReactNipple from 'react-nipple';
import CoffeShop from "./CoffeShop"
import { MobilePlayer } from "./MobilePlayer"
import { PerspectiveCamera } from "@react-three/drei";
import React from "react"
import Ecctrl, { EcctrlJoystick } from "ecctrl";
import CharacterModel from "./CharacterModel"
import { TorusKnot } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier"
import { Perf } from 'r3f-perf'


export default function App() {

  const cameraRef = React.useRef();
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
    // Optional animation key map
    { name: "action1", keys: ["1"] },
    { name: "action2", keys: ["2"] },
    { name: "action3", keys: ["3"] },
    { name: "action4", keys: ["KeyF"] },
  ];


  return (
    <>
      <BrowserView>
        <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "w", "W"] },
            { name: "backward", keys: ["ArrowDown", "s", "S"] },
            { name: "left", keys: ["ArrowLeft", "a", "A"] },
            { name: "right", keys: ["ArrowRight", "d", "D"] },
            { name: "jump", keys: ["Space"] },
          ]}>
          <Canvas shadows style={{ height: '100vh' }}>
            <Sky sunPosition={[100, 20, 100]} />
            <ambientLight intensity={0.3} />
            <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
            <Perf position="top-left" />
            <Physics debug>
              <Ground />
              <Player />
              <Cube position={[0, 0.5, -10]} />
              <RigidBody colliders="trimesh" position={[3, 2, 0]}>
                <TorusKnot scale={0.5}>
                  <meshPhysicalMaterial />
                </TorusKnot>
              </RigidBody>
              {/* <Cubes /> */}
              <CoffeShop />
            </Physics>

            <PointerLockControls />
          </Canvas>
        </KeyboardControls>
      </BrowserView>




      <MobileView>
        <EcctrlJoystick />

        <Canvas shadows style={{ height: '100vh' }}>
          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={0.3} />
          <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />


          <Physics timeStep="vary" debug>
            {/* Keyboard preset */}
            <KeyboardControls map={keyboardMap}>
              {/* Character Control */}
              {/* <Ecctrl>
                <CharacterModel />
              </Ecctrl> */}
              <Ground />
            </KeyboardControls>

          </Physics>

        </Canvas>
      </MobileView>
    </>

  )
}
