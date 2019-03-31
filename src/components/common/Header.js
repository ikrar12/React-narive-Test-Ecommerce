import React from 'react'
import {Text,View,} from 'react-native'

const Header = (props) => {
  const { TextStyle, ViewStyle } = style;

  return(
    <View style={ViewStyle}>
      <Text style={ TextStyle }>{props.tulistext}</Text>
    </View>
 )
};
const style= {
  ViewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {widht:0, height:2},
    shadowOpacity:0.2,
    elevation:2,
    position: 'relative'
  },
  TextStyle:{
    fontSize:20
  }
}
export default Header
