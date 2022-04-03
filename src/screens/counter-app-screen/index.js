/* eslint-disable */
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity, Dimensions, Image,
} from "react-native";
import { connect } from 'react-redux'
import theme from "../../utill/theme";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { styles } from "./styles";
import SliderComponent from "../../../components/Slider";
import Button from "../../../components/Button";


const CounterApp=(props)=> {

  //defining the states of widgets
  const [w1, setw1]= useState(true)
  const [w2, setw2]= useState(false)

  //defining state of indicators
  const [dataSet, setDataSet]= useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false
  })

  // setting the indicator text
  const [text, setText] =useState('')

  // setting the slider value
  const [fill, setFill]= useState(70)

  // render first widget
  const renderWidgetOne= ()=> {
    return(
      <View>
        <Text style={styles.subHeading}>Pick the level of your anger and frustration right now</Text>
        <View style={{alignSelf:'center'}}>
          <View style={styles.progressCircleDotted}>
            <AnimatedCircularProgress
              size={150}
              width={3}
              fill={fill}
              tintColor="white"
              backgroundColor= 'none'>
              {
                (fill) => (
                  <View style={{height: 150, width: 150, borderWidth: 30, borderRadius: 150, backgroundColor: '#00FFFF', borderColor: 'gray',
                    alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 36, fontWeight: 'bold', color: '#ffffff'}}>
                      { Math.round(fill/10) }
                    </Text>
                  </View>

                )
              }
            </AnimatedCircularProgress>
          </View>
        </View>
        <View style={{height: 50}}/>

        <SliderComponent
          onValueChange={(val)=> {setFill(val)}}
          value={fill}
        />

      </View>
    )
  }

  // render second widget
  const renderWidgetTwo= ()=> {
    return(
      <View>
        <Text style={styles.subHeading}>Pick the level of your anger and frustration right now</Text>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity style={[styles.trap, {width: 250, borderTopColor: dataSet.five ? 'white' : theme.Off_Gray}]} onPress={()=> {
          setText('High')
          setDataSet({
            one: true,
            two: true,
            three: true,
            four: true,
            five: true
          })
        }}/>
        <TouchableOpacity style={[styles.trap, {width: 200, borderTopColor: dataSet.four ? 'white' : theme.Off_Gray}]} onPress={()=> {
          setText('High')
          setDataSet({
            one: true,
            two: true,
            three: true,
            four: true,
            five: false
          })
        }}/>
        <TouchableOpacity style={[styles.trap, {width: 150, borderTopColor: dataSet.three ? 'white' : theme.Off_Gray}]} onPress={()=> {
          setText('Medium')
          setDataSet({
            one: true,
            two: true,
            three: true,
            four: false,
            five: false
          })
        }}/>
        <TouchableOpacity style={[styles.trap, {width: 100, borderTopColor: dataSet.two ? 'white' : theme.Off_Gray}]} onPress={()=> {
          setText('Low')
          setDataSet({
            one: true,
            two: true,
            three: false,
            four: false,
            five: false
          })
        }}/>
        <TouchableOpacity style={[styles.trap, {width: 50, borderTopColor: dataSet.one ? 'white' : theme.Off_Gray}]} onPress={()=> {
          setText('Low')
          setDataSet({
            one: true,
            two: false,
            three: false,
            four: false,
            five: false
          })
        }}/>
      </View>
    )
  }


    return (
      <View style={styles.container}>

        <View style={styles.navView}>
          <TouchableOpacity style={[styles.nav, {backgroundColor: w1 ? 'white' : theme.Off_Gray}]} onPress={()=> {
            setw1(true) // setting state of widget one true so the first widget would render
            setw2(false) // setting state of widget two false
          }}/>
          <View style={{width: 10}}/>
          <TouchableOpacity style={[styles.nav, {backgroundColor: w2 ? 'white' : theme.Off_Gray}]} onPress={()=> {
            setw1(false) // setting state of widget one false
            setw2(true) //setting state of widget two true so the second widget would render
          }}/>
        </View>

        <View style={styles.headingView}>
          <Text style={styles.heading}>Rescue Session : Anger and frustration</Text>
          <Image source={require('../../img/close.png')} style={{width: 10, height: 10, tintColor: 'white', marginLeft: 20}}/>
        </View>

        {w1 ? renderWidgetOne() : renderWidgetTwo()}

        {/*navigating between two widgets*/}
        <Button onPress={()=> {
          setw1(false)
          setw2(true)
        }}/>

      </View>
    );
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
    decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)

