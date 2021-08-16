import React, { useRef, useState, useEffect } from 'react'
import { View } from 'react-native'
import {
  Mesh, PerspectiveCamera,
} from 'three'
import { Canvas, useFrame, useThree } from 'react-three-fiber'

import FBX from '../components/objects/fbx'

import globalStyles from '../utils/global-styles'

const Box = (props: Partial<typeof Mesh>) => {
  const mesh = useRef<Mesh>()

  const [ hovered, setHover ] = useState(false)
  const [ active, setActive ] = useState(false)

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [ 1.5, 1.5, 1.5 ] : [ 1, 1, 1 ]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry args={[ 1, 1, 1 ]} />
      <meshStandardMaterial
        color={hovered ? 'hotpink' : 'orange'}
      />
    </mesh>
  )
}

const Camera = () => {
  const camera = useRef<PerspectiveCamera>()
  const { setDefaultCamera } = useThree()

  useFrame(() => {
    // camera.current.rotation.z += 0.01
    // camera.current.rotation.x = MathUtils.degToRad(10)
  })

  useEffect(() => {
    setDefaultCamera(camera.current)
  }, [])

  return (
    <perspectiveCamera
      ref={camera}
      position={[ 0, 0, 10 ]}
      rotation={[ 0 ,0, 0 ]}
      near={0.1}
      far={10000}
      fov={45}
    />
  )
}

const Three = () => {
  return (
    <View style={[ globalStyles.flex1, { backgroundColor: '#ccc' }]}>
      <Canvas
        gl={{
          antialias: true,
          premultipliedAlpha: false,
          preserveDrawingBuffer: true,
        }}
      >
        <Camera />
        <ambientLight />
        <pointLight position={[ 10, 10, 10 ]} />
        <Box position={[ 0, 5, -10 ]} />
        <Box position={[ 0, -5, -10 ]} />
        <FBX position={[ 0, -2, 0 ]} />
      </Canvas>
    </View>
  )
}

export default Three
