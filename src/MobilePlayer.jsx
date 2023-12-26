import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import { useJoystickControls } from "ecctrl";
import * as THREE from "three";
const SPEED = 5;

export function MobilePlayer() {
    const ref = useRef();
    // const rapier = useRapier();

    //   // Use the useJoystickControls hook
    //   const { setJoystick, resetJoystick, pressButton1, releaseAllButtons } = useJoystickControls();

    //   useFrame((state) => {
    //     // Get joystick input values
    //     const { x: joystickDisX, y: joystickDisY, angle: joystickAng, isPressing: runState } = getJoystickValues();

    //     const velocity = ref.current.linvel();

    //     // Update camera position
    //     state.camera.position.set(...ref.current.translation());

    //     // Joystick controls
    //     // Use the joystick input to control the character
    //     setJoystick(joystickDisX, joystickDisY, runState);

    //     // Movement
    //     const frontVector = new THREE.Vector3(0, 0, -joystickDisY);
    //     const sideVector = new THREE.Vector3(joystickDisX, 0, 0);
    //     const direction = new THREE.Vector3();
    //     direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(state.camera.rotation);

    //     ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });

    //     // Jumping
    //     const world = rapier.world.raw();
    //     const ray = world.castRay(new RAPIER.Ray(ref.current.translation(), { x: 0, y: -1, z: 0 }));
    //     const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.75;

    //     if (runState && grounded) {
    //       // Perform actions when button 1 is pressed (for example, jumping)
    //       pressButton1();
    //     }
    //   });

    return (
        <>
            <RigidBody ref={ref} colliders={false} mass={1} type="dynamic" position={[0, 10, 0]} enabledRotations={[false, false, false]}>
        <CapsuleCollider args={[0.5, 0.5]} />
      </RigidBody>


        </>
    );
}
