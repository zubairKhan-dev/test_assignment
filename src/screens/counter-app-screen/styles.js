/* eslint-disable */
import { Dimensions, StyleSheet } from "react-native";
import theme from "../../utill/theme";

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

function hp(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

export const styles = StyleSheet.create({
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
