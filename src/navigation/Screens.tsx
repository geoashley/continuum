import React from "react";
import { Easing, Animated, Dimensions, Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import  Card  from "../components/card";
import  TimeDetails  from "../components/TimeDetails";

import { articles, appTheme} from "../constants/";
import { Block, Text, theme } from "galio-framework";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const Stack = createStackNavigator();

export interface Props {
}



function HomeScreen({navigation}: any) {
  const items = articles.map((anItem)=>{return  <Card item={anItem} navigation={navigation} />})

    return (
    <Block flex>
      {items}
    </Block>

    );
  }
  
  function DetailScreen({route, navigation}: any) {
    return (
    <TimeDetails item={route.params.item} navigation={navigation} ></TimeDetails>
    );
  }
export default function OnboardingStack(props: Props) {
    return (
      <Stack.Navigator mode="card"
      screenOptions={{
        headerStyle: {
          backgroundColor: appTheme.COLORS.NAVBAR,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} >
      <Stack.Screen name="Home" component={HomeScreen}   
         />
       <Stack.Screen name="Detail" component={DetailScreen} /> 
      </Stack.Navigator>
    );
  }