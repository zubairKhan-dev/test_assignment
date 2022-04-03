/* eslint-disable */
import React from "react";
import { Dimensions, View } from "react-native";
import Slider from 'react-native-custom-slider';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

function hp(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

const SliderComponent= (props)=> {
  return(
    <Slider
      value={props.value}
      minimumValue={0}
      maximumValue={100}
      onValueChange={props.onValueChange} // function to change value on slider movement
      thumbStyle={{ justifyContent: 'center', alignItems: 'center', width: 20 }}
      trackStyle={{width: wp(80), backgroundColor: '#ffffff', height: 10, borderRadius: 10}} // track style
      minimumTrackTintColor={'#89CFF0'} // track color
      // thumb style
      customThumb={
        <View
          style={{
            width: 20,
            height: 20,
            overflow: 'hidden',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: '#89CFF0',
            borderWidth: 2,
            borderColor: '#ffffff'
          }}
        />
      }
    />
  )
}

export default SliderComponent
