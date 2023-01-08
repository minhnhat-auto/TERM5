import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "@expo/vector-icons/Ionicons"
import Home from "./Home"
import About from "./About"
import AddNavigation from "./AddNavigation"
import SearchNavigation from "./SearchNavigation"
const Tab = createBottomTabNavigator()
function Main() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName

					if (route.name === "Home") {
						iconName = focused ? "ios-home" : "ios-home-outline"
					} else if (route.name === "SearchNavigation") {
						iconName = focused ? "ios-search" : "ios-search-outline"
					} else if (route.name === "AddNavigation") {
						iconName = focused ? "ios-add" : "ios-add-outline"
					} else if (route.name === "About") {
						iconName = focused ? "ios-people" : "ios-people-outline"
					}

					return <Ionicons name={iconName} size={size} color={color} />
				},
				tabBarActiveTintColor: "#2c74d3",
				tabBarInactiveTintColor: "gray",
				headerStyle: {
					backgroundColor: "#554AF0"
				},
				headerTintColor: "white",
				headerTitleStyle: {
					fontWeight: "bold"
				}
			})}
		>
			<Tab.Screen name='Home' component={Home} />
			<Tab.Screen name='SearchNavigation' component={SearchNavigation} options={{ title: "Search" }} />
			<Tab.Screen name='AddNavigation' options={{ title: "Add" }} component={AddNavigation} />
			<Tab.Screen name='About' component={About} />
		</Tab.Navigator>
	)
}

export default Main
