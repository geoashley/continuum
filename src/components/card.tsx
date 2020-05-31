import React from 'react';
import { Switch, } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import {withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { appTheme } from '../constants';

interface CardProps {
  navigation:NavigationScreenProp<NavigationState, NavigationParams>,
  style?:any,
  item: {
    title:string,
    cta?:string,
    horizontal?:boolean,
    isSet:boolean
  }
}

interface IState {
  isOn: boolean
};

class Card extends React.Component<CardProps, IState> {
  state:IState = { 
    isOn: this.props.item.isSet
  };
  
  toggleSwitch = () => {
    this.setState({
      isOn: !this.state.isOn
    });
  }

  render() {
    const { navigation, item, style } = this.props;

    const cardContainer = [styles.card, styles.shadow, style];

    return (
      <Block  flex style={cardContainer} >
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail', {item})}>
          <Block flex space="between" style={styles.cardDescription}>
            <Text h4 style={styles.cardTitle} color={ appTheme.COLORS.CARD_FONT}>{item.title} </Text>
            <Text h6 color={ appTheme.COLORS.CARD_FONT} bold>{item.cta}</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={this.state.isOn ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={this.toggleSwitch}
              value={this.state.isOn}
      />
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: appTheme.COLORS.CARD_BACKGROUND,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 100,
    marginBottom: 5
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
    
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default Card;