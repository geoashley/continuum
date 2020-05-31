import React from 'react';
import { Switch, } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { appTheme } from '../constants';
import { Button } from 'react-native-elements';

export interface TimeDetailsProps {
  navigation:NavigationScreenProp<NavigationState, NavigationParams>,
  style?:any,
  item: {
    title:string,
    cta:string,
    horizontal:boolean
  },

}

interface IState {
  isOn: boolean
};

class TimeDetails extends React.Component<TimeDetailsProps, IState> {
  state: IState= { 
    isOn: false
  } 
  
  toggleSwitch=()=>{
    this.setState({
      isOn: true
    });
  }
  
  render() {
    const { navigation, item, style } = this.props;
    return(
    <Block flex>

      <Text h4 style={styles.textTitle} color={appTheme.COLORS.CARD_FONT}>{item.title} </Text>
      <Button
      title="Save"
      onPress={() =>
        navigation.navigate('Home')
      }
    >
      save
      </Button>
    </Block>
    )
  }
}


const styles = StyleSheet.create({
  textTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
  }
});
export default TimeDetails;