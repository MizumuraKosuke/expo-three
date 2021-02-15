import React, { useRef, useState } from 'react'
import { View } from 'react-native'
import { Canvas, useFrame } from 'react-three-fiber'

import globalStyles from '../utils/global-styles'

const Box = (props: any) => {
  const mesh = useRef<any>()

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

const Three = () => {
  return (
    <View style={globalStyles.flex1}>
      <Canvas
        gl={{
          antialias: true,
          premultipliedAlpha: false,
          preserveDrawingBuffer: true,
        }}
      >
        <ambientLight />
        <pointLight position={[ 10, 10, 10 ]} />
        <Box position={[ -1.2, 0, 0 ]} />
        <Box position={[ 1.2, 0, 0 ]} />
      </Canvas>
    </View>
  )
}

export default Three
