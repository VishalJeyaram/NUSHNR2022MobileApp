import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import MyTabs from "./TabNavigator";
import Profile from "../screens/Profile";
import HomeScreen from "../screens/HomeScreen";
import { DrawerContent } from "./DrawerContent";


const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="Default" component={MyTabs} />
    </Drawer.Navigator>
  );
};

const FinalNavigator = () => {
  return (
    <DrawerNavigator>
      <MyTabs/>
    </DrawerNavigator>
  );
}




export default FinalNavigator;