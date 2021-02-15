import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  flex1: {
    flex: 1,
  },
  flex0: {
    flex: 0,
  },

  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },

  container: {
    paddingHorizontal: '1.25rem',
  },
  row: {
    flexDirection: 'row',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyFlexEnd: {
    justifyContent: 'flex-end',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },

  white: {
    color: '$white',
  },
  black: {
    color: '$black',
  },
  grayLight: {
    color: '$grayLight',
  },
  underline: {
    textDecorationLine: 'underline',
  },

  bold: {
    fontWeight: '700',
  },
})
