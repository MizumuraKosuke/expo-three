import EStyleSheet from 'react-native-extended-stylesheet'
import { Platform } from 'react-native'

EStyleSheet.build({
  $white: '#fff',
  $black: '#2a2a2a',
  $textColorDefault: '#000',
  $textGray: '#7a7a7a',
  $bgGray: '#e2e2e2',
  $bgGrayDark: '#b8b8b8',
  $bgGray2: '#a3a3a3',
  $gray: '#DEDEDE',
  $grayLight: '#a5a5a5',
  $headerGray: '#7a7a7a',
  $graphOrange: '#ff794f',
  $graphOrangeLight: '#ff9372',
  $graphBlue: '#8dadff',

  $red: '#FF4141',
  $orange: '#ff9372',
  $orangeLight: 'rgb(255, 238, 210)',
  $orangeLighter: 'rgb(249, 240, 225)',
  $rem: Platform.OS === 'android' ? 12.5 : 16,
})
