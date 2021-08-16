import React, { useRef, useMemo, useState } from 'react'
import { PrimitiveProps } from 'react-three-fiber'
import { Asset } from 'expo-asset'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const SOL = (props: Partial<PrimitiveProps>) => {
  const prim = useRef<PrimitiveProps>()
  const [ building, setBuilding ] = useState(null)

  useMemo(
    async () => {
      const mtl = Asset.fromModule(require('../../../assets/objects/sol/textured.mtl'))
      await mtl.downloadAsync()
      new MTLLoader().load(mtl.localUri, async (materials) => {
        materials.preload()
        const objLoader = new OBJLoader()
        objLoader.setMaterials(materials)
        const obj = Asset.fromModule(require('../../../assets/objects/sol/textured.obj'))
        await obj.downloadAsync()
        objLoader.load(obj.localUri, async (model) => {
          model.scale.set(100, 100, 100)
          setBuilding(model)
        })
      })
    },
    [],
  )

  return (
    <>
      {building ? <primitive ref={prim} object={building} {...props} /> : null}
    </>
  )
}

export default SOL
