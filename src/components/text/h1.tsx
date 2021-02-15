import React from 'react'
import { View, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

type Props = {
  children: React.ReactNode,
  color?: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any,
}

const H1 = ({ children, color, style }: Props) => {
  const styles = EStyleSheet.create({
    text: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color,
      ...style,
    },
  })

  return (
    <View>
      <Text style={styles.text}>
        {children}
      </Text>
    </View>
  )
}

H1.defaultProps = {
  style: null,
  color: '$textColorDefault',
}

export default H1
