import React from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/FontAwesome";
import TabBarComponent from "../../modules/homeTab/containers/TabBarComponent";
import {
  NetInfo,
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
  Platform,
  StatusBar,
  Button,
  TouchableWithoutFeedback,
  Image
} from "react-native";

import { HomeTabRoutesNavigator } from "./HomeTabRoutes";
import { LocationTabRoutesNavigator } from "./LocationTabRoutes";
import { SearchTabRoutesNavigator } from "./SearchTabRoutes";
import { AlertsTabRoutesNavigator } from "./AlertsTabRoutes";
import { MoreOptionsTabRouteNavigator } from "./MoreOptionsTabRoutes";

const routes = {
  Home: {
    screen: HomeTabRoutesNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `home${focused ? "" : ""}`;
        }
        return <Icon name={iconName} size={22} color={tintColor} />;
      }
    })
  },
  Location: {
    screen: LocationTabRoutesNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Location") {
          iconName = `compass${focused ? "" : ""}`;
        }
        return <Icon name={iconName} size={22} color={tintColor} />;
      }
    })
  },
  Search: {
    screen: SearchTabRoutesNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Search") {
          iconName = `search${focused ? "" : ""}`;
        }
        return <Icon name={iconName} size={22} color={tintColor} />;
      }
    })
  },
  Alerts: {
    screen: AlertsTabRoutesNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Alerts") {
          iconName = `bell${focused ? "" : ""}`;
        }
        return <Icon name={iconName} size={22} color={tintColor} />;
      }
    })
  },
  More: {
    screen: MoreOptionsTabRouteNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "More") {
          iconName = `list-ul${focused ? "" : ""}`;
        }
        return <Icon name={iconName} size={22} color={tintColor} />;
      }
    })
  }
};
const routesConfiguration = {
  initialRouteName: "Home",
  tabBarOptions: {
    activeTintColor: "tomato",
    inactiveTintColor: "gray"
  },
  tabBarComponent: TabBarComponent,
  tabBarPosition: "bottom",
  animationEnabled: true,
  swipeEnabled: true,
  lazy: true
};

export const TabRoutesNavigator = TabNavigator(routes, routesConfiguration);
