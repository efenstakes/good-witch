import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_18: THREE.Mesh;
  };
  materials: {
    Mat_Eyes: THREE.MeshStandardMaterial;
    Mat_Nails: THREE.MeshStandardMaterial;
    Mat_Skin: THREE.MeshStandardMaterial;
    Mat_Crib: THREE.MeshStandardMaterial;
    Mat_CribDetails: THREE.MeshStandardMaterial;
    Mat_LogoCircle: THREE.MeshStandardMaterial;
    Mat_Polygons: THREE.MeshStandardMaterial;
    Mat_ChristmasCap: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/assets/models/3december_2020_day_21_alien.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Grogu_1"
                position={[0, 3.33, 1.2]}
                rotation={[0.09, 0, 0]}
                scale={[0.82, 0.2, 0.82]}
              >
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.Mat_Eyes}
                />
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Mat_Nails}
                />
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Mat_Skin}
                />
              </group>
              <group name="Sphere_3" position={[0, 2.6, 0]} scale={1.87}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Mat_Crib}
                />
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials.Mat_CribDetails}
                />
              </group>
              <group
                name="Plane001_4"
                position={[1.51, 2.81, 1.91]}
                rotation={[-1.16, 0.78, 1.19]}
                scale={[0.19, 0.19, 0.23]}
              >
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials.Mat_LogoCircle}
                />
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.Mat_Polygons}
                />
              </group>
              <group
                name="Cylinder_5"
                position={[-0.49, 4, 1.96]}
                rotation={[-1.85, -0.52, -0.62]}
              >
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Mat_Polygons}
                />
              </group>
              <group
                name="Cylinder001_6"
                position={[0.49, 3.99, 2.01]}
                rotation={[-1.31, -0.52, 0.4]}
              >
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.Mat_Polygons}
                />
              </group>
              <group
                name="Cylinder002_7"
                position={[0, 4.8, 1.38]}
                scale={[0.56, 0.25, 0.56]}
              >
                <mesh
                  name="Object_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.Mat_Polygons}
                />
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Mat_ChristmasCap}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/3december_2020_day_21_alien.glb");
