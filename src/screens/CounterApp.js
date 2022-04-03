/* eslint-disable */
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity, Dimensions, Image,
} from "react-native";
import { connect } from 'react-redux'
import theme from "../utill/theme";
import Button from "../../components/Button";
import SliderComponent from "../../components/Slider";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

function hp(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

const CounterApp=(props)=> {

  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  };

  const [w1, setw1]= useState(true)
  const [w2, setw2]= useState(false)
  const [dataSet, setDataSet]= useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false
  })

  const [text, setText] =useState('')

  const [fill, setFill]= useState(70)

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
            setw1(true)
            setw2(false)
          }}/>
          <View style={{width: 10}}/>
          <TouchableOpacity style={[styles.nav, {backgroundColor: w2 ? 'white' : theme.Off_Gray}]} onPress={()=> {
            setw1(false)
            setw2(true)
          }}/>
        </View>
        <View style={styles.headingView}>
          <Text style={styles.heading}>Rescue Session : Anger and frustration</Text>
          <Image source={require('../img/close.png')} style={{width: 10, height: 10, tintColor: 'white', marginLeft: 20}}/>
        </View>
        {/*<View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>*/}
        {/*  <TouchableOpacity onPress={() => props.increaseCounter()}>*/}
        {/*    <Text style={{ fontSize: 20 }}>Increase</Text>*/}
        {/*  </TouchableOpacity>*/}
        {/*  <Text style={{ fontSize: 20 }}>{props.counter}</Text>*/}
        {/*  <TouchableOpacity onPress={() => props.decreaseCounter()}>*/}
        {/*    <Text style={{ fontSize: 20 }}>Decrease</Text>*/}
        {/*  </TouchableOpacity>*/}
        {/*</View>*/}
        {w1 ? renderWidgetOne() : renderWidgetTwo()}
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.Default_Color
  },
  nav: {
    width: wp(45),
    height: 5,
    borderRadius: 3,
    backgroundColor: theme.Off_Gray
  },
  navView : {
    flexDirection: 'row',
    position: 'absolute',
    top: 10
 },
  headingView: {
    position: 'absolute',
    top: hp(5),
    flexDirection: 'row',
    height: 20,
    alignItems: 'center'
  },
  heading: {
    textTransform: 'uppercase',
    color: 'white',
  },
  progressCircleDotted :{
    height: 225,
    width: 225,
    borderRadius: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'white'
  },
  subHeading : {
    fontSize: 20,
    fontWeight: '500',
    color: "white",
    alignSelf: 'center',
    textAlign: 'center',
    wordWrap: 'break-word',
    width: wp(80),
    marginBottom: 50
  },
  trap: {
    width: 50,
    height: 0,
    borderTopWidth: 30,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    alignSelf: 'center',
    marginTop: 20
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
  }
});
