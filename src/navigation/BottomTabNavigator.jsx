import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import WatchlistScreen from "../screens/WatchlistScreen";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "#181818",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Entypo name="home" size={focused ? 30 : 25} color={color} />
            );
          },
        }}
      />
      <Tab.Screen name="Watchlist" component={WatchlistScreen}  options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <FontAwesome name="star" size={focused ? 30 : 25} color={color}/>
            );
          },
        }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
