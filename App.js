import React from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import DrawerMenu from "./DrawerMenu";
const DrawerNavigation = createDrawerNavigator(
  {
    Home: Home,
    About: About,
    Contact: Contact
  },
  {
    initialRouteName: "Home",
    drawerBackgroundColor: "lightblue",
    contentOptions: {
      activeTintColor: "red"
    },
    contentComponent: DrawerMenu
  }
);

const Router = createAppContainer(
  createSwitchNavigator({
    DrawerNavigation
  })
);

export default function App() {
  return <Router />;
}
