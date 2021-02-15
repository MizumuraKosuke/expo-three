import React from 'react'
import { View, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

type Props = {
  children: React.ReactNode,
  color?: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any,
}

const P = ({ children, color, style }: Props) => {
  const styles = EStyleSheet.create({
    text: {
      fontSize: '0.75rem',
      fontWeight: '500',
      lineHeight: '1.2rem',
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

P.defaultProps = {
  style: null,
  color: '$textColorDefault',
}

export default P
