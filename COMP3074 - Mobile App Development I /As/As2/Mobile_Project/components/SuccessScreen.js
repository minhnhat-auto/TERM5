import React, {useEffect, useContext} from "react"
import { View, Text, StyleSheet } from "react-native"
import Ionicon from "react-native-vector-icons/Ionicons"
import RestaurantContext from './RestaurantContext'
function SuccessScreen({ navigation }) {
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate("Search")
		}, 1500)
	})
	return (
		<View style={styles.container}>
			<View style={styles.badge}>
				<Ionicon name='checkmark-circle' size={70} color='#554AF0' />
				<Text style={styles.title}>Successful add a restaurant</Text>
			</View>
		</View>
	)
}

export default SuccessScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	title: {
		fontSize: 26,
		fontWeight: "bold",
		color: "#554AF0",
		textAlign: "center"
	},
	badge: {
		backgroundColor: "#fff",
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		borderRadius: 12
	}
})
