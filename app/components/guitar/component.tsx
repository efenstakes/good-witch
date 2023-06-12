import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Generic_Les_Paul_Mesh: THREE.Mesh;
    Generic_Les_Paul_Mesh_1: THREE.Mesh;
    Generic_Les_Paul_Mesh_2: THREE.Mesh;
    Generic_Les_Paul_Mesh_3: THREE.Mesh;
    Generic_Les_Paul_Mesh_4: THREE.Mesh;
    Generic_Les_Paul_Mesh_5: THREE.Mesh;
    Generic_Les_Paul_Mesh_6: THREE.Mesh;
    Generic_Les_Paul_Mesh_7: THREE.Mesh;
    Generic_Les_Paul_Mesh_8: THREE.Mesh;
  };
  materials: {
    Plastic: THREE.MeshStandardMaterial;
    ["Golden Metal"]: THREE.MeshStandardMaterial;
    ["Fretboard Wood"]: THREE.MeshStandardMaterial;
    Ivory: THREE.MeshStandardMaterial;
    Finish: THREE.MeshStandardMaterial;
    ["Silver Metal"]: THREE.MeshStandardMaterial;
    Knobs: THREE.MeshStandardMaterial;
    ["Pickup Wrap Fabric"]: THREE.MeshStandardMaterial;
  };
};


type GuitarModelProps = {
  body?: string
  neck?: string
  volumeToneControls?: string
  humbuckerSelectorPickup?: string
}
const SCALE = 5.5
export default function GuitarModel({ neck, body, volumeToneControls, humbuckerSelectorPickup }: GuitarModelProps) {
  const { nodes, materials } = useGLTF("/assets/models/guitar.gltf") as GLTFResult;

  let neckColorProps = {}
  if( neck ) {
    neckColorProps['material-color'] = neck
  }
  
  let bodyColorProps = {}
  if( body ) {
    bodyColorProps['material-color'] = body
  }
  
  let volumeToneControlsColorProps = {}
  if( volumeToneControls ) {
    volumeToneControlsColorProps['material-color'] = volumeToneControls
  }
  
  let humbuckerSelectorPickupColorProps = {}
  if( humbuckerSelectorPickup ) {
    humbuckerSelectorPickupColorProps['material-color'] = humbuckerSelectorPickup
  }

  return (
    <group dispose={null} scale={[ SCALE, SCALE, SCALE ]} position={[ 0, -1, 0 ]}>
      <group name="Scene">
        <group name="Generic_Les_Paul">
          <mesh
            name="Generic_Les_Paul_Mesh"
            castShadow
            receiveShadow
            geometry={nodes.Generic_Les_Paul_Mesh.geometry}
            material={materials.Plastic}
          />
          <mesh
            name="Generic_Les_Paul_Mesh_1"
            castShadow
            receiveShadow
            geometry={nodes.Generic_Les_Paul_Mesh_1.geometry}
            material={materials["Golden Metal"]}
          />
          <mesh
            name="Generic_Les_Paul_Mesh_2"
            castShadow
            receiveShadow
            geometry={nodes.Generic_Les_Paul_Mesh_2.geometry}
            material={materials["Fretboard Wood"]}
            material-color={neck}
          />
          <mesh
            name="Generic_Les_Paul_Mesh_3"
            castShadow
            receiveShadow
            geometry={nodes.Generic_Les_Paul_Mesh_3.geometry}
            material={materials.Ivory}
            // material-color="blue"
          />
          <mesh
            name="Generic_Les_Paul_Mesh_4"
            castShadow
            receiveShadow
            geometry={nodes.Generic_Les_Paul_Mesh_4.geometry}
            material={materials.Finish}
            // material-color={body}
            {...bodyColorProps}
          />
          <mesh
            name="Generic_Les_Paul_Mesh_5"
            castShadow
            receiveShadow
            geometry={nodes.Generic_Les_Paul_Mesh_5.geometry}
            material={materials["Silver Metal"]}
          />
          <mesh
            name="Generic_Les_Paul_Mesh_6"
            castShadow
            receiveShadow
            geometry={nodes.Generic_Les_Paul_Mesh_6.geometry}
            material={materials.Plastic}
            // material-color={humbuckerSelectorPickup}
            {...humbuckerSelectorPickupColorProps}
            // material-color={volumeToneControls}
          />
          <mesh
            name="Generic_Les_Paul_Mesh_7"
            castShadow
            receiveShadow
            geometry={nodes.Generic_Les_Paul_Mesh_7.geometry}
            material={materials.Knobs}
            // material-color={volumeToneControls}
            {...volumeToneControlsColorProps}
          />
          <mesh
            name="Generic_Les_Paul_Mesh_8"
            castShadow
            receiveShadow
            geometry={nodes.Generic_Les_Paul_Mesh_8.geometry}
            material={materials["Pickup Wrap Fabric"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/guitar.gltf");
