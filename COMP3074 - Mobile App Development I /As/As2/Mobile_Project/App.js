import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import RestaurantContext from "./components/RestaurantContext"
import Loading from "./components/Loading"
import Main from "./components/Main"
const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<RestaurantContext>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Loading'
					screenOptions={{
						headerShown: false
					}}
				>
					<Stack.Screen name='Loading' component={Loading}></Stack.Screen>
					<Stack.Screen name='Main' component={Main}></Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</RestaurantContext>
	)
}
