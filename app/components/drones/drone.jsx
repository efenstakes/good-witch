import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model() {
  const group = useRef(null);
  
  const { nodes, materials, animations } = useGLTF("/one.glb");
  const { actions } = useAnimations(animations, group);

  const [posZ, setPosZ] = useState(-5)

  console.log("actions ", actions)

  useEffect(() => {
    actions.Hover.play()
    // actions.filter(a=> a.endsWith("Action")).map((anim)=> anim.play())
  }, [])

  useFrame(()=> {
    setPosZ((state)=> {
      return state < 0 ? state += .3 : state
    })
  })

  return (
    <group ref={group} dispose={null} position-z={posZ} rotation-y={ -Math.PI / 2 }>
      <group name="Scene">
        <mesh
          name="DroneBall"
          castShadow
          receiveShadow
          geometry={nodes.DroneBall.geometry}
          material={materials.BodyGray}
          position={[0, 0.16, 0]}
        >
          <mesh
            name="FrontEye"
            castShadow
            receiveShadow
            geometry={nodes.FrontEye.geometry}
            material={materials.Blackish}
          >
            <mesh
              name="EyeBall"
              castShadow
              receiveShadow
              geometry={nodes.EyeBall.geometry}
              material={materials.Green}
            />
          </mesh>
          <mesh
            name="FrontEye001"
            castShadow
            receiveShadow
            geometry={nodes.FrontEye001.geometry}
            material={materials.DarkGrey}
            position={[0.82, 0, 0]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={0.38}
          />
          <mesh
            name="Wing"
            castShadow
            receiveShadow
            geometry={nodes.Wing.geometry}
            material={materials.Blackish}
            position={[-1.03, -0.47, 0.08]}
            scale={[1, 1, 2.99]}
          >
            <mesh
              name="LeftWingMuzzle"
              castShadow
              receiveShadow
              geometry={nodes.LeftWingMuzzle.geometry}
              material={materials.Blackish}
              position={[2.53, -0.05, 0.34]}
              scale={[1, 1, 0.33]}
            >
              <mesh
                name="Cylinder001"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001.geometry}
                material={materials.DarkGrey}
                position={[0.2, -0.01, -0.01]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.05}
              />
              <mesh
                name="LeftWingMuzzle001"
                castShadow
                receiveShadow
                geometry={nodes.LeftWingMuzzle001.geometry}
                material={materials.DarkGrey}
              />
              <mesh
                name="LeftWingMuzzle002"
                castShadow
                receiveShadow
                geometry={nodes.LeftWingMuzzle002.geometry}
                material={materials.DarkGrey}
                position={[0, 0, -2.06]}
              />
            </mesh>
            <mesh
              name="RightWingMuzzle"
              castShadow
              receiveShadow
              geometry={nodes.RightWingMuzzle.geometry}
              material={materials.Blackish}
              position={[2.53, -0.05, -0.34]}
              scale={[1, 1, 0.33]}
            >
              <mesh
                name="Cylinder002"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002.geometry}
                material={materials.DarkGrey}
                position={[0.2, -0.01, 0.01]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.05}
              />
            </mesh>
          </mesh>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/one.glb");
