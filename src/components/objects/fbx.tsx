import React, { useMemo, useState, useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { TextureLoader } from 'expo-three'
import { Asset } from 'expo-asset'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const SOL = (props: Partial<any>) => {
  const prim = useRef<any>()
  const [ building, setBuilding ] = useState(null)

  const textureLoader = new TextureLoader()
  const barkTex = textureLoader.load(require('../../../assets/objects/tree/Tree.fbm/bark_0021.jpg'))
  const reefTex = textureLoader.load(require('../../../assets/objects/tree/Tree.fbm/DB2X2_L01.png'))
  const reefSpec = textureLoader.load(require('../../../assets/objects/tree/Tree.fbm/DB2X2_L01_Spec.png'))
  const reefNor = textureLoader.load(require('../../../assets/objects/tree/Tree.fbm/DB2X2_L01_Nor.png'))

  useMemo(
    async () => {
      const fbx = Asset.fromModule(require('../../../assets/objects/tree/Tree.fbx'))
      await fbx.downloadAsync()
      new FBXLoader().load(fbx.localUri, async (model) => {
        model.children[0].material[0].map = barkTex
        model.children[0].material[1].map = reefTex
        model.children[0].material[1].normalMap = reefNor
        model.children[0].material[1].specularMap = reefSpec
        setBuilding(model)
      })
    },
    [],
  )

  useFrame(() => {
    if (!prim.current) {
      return
    }
    prim.current.rotation.y += 0.01
  })

  return (
    <>
      {building ? <primitive ref={prim} object={building} {...props} /> : null}
    </>
  )
}

export default SOL
