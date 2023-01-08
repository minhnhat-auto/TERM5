import React, { useContext } from "react"
import { View, Modal, Text, SafeAreaView, Button, StyleSheet } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import { RestaurantList } from "./RestaurantContext"
function Rating({ visible, setVisible, id, navigation }) {
	let { restaurantList, setRestaurantList } = useContext(RestaurantList)
	const handleRating = async rating => {
		let newRestaurantList = restaurantList.map(restaurant => {
			if (restaurant.id == id) {
				restaurant.rating = rating
			}

			return restaurant
		})

		await setRestaurantList(newRestaurantList)
		await setVisible(false)
		navigation.navigate("Search")
		
		
	}
	const handleGoBack = () => {
		setVisible(false)
	}
	return (
		<Modal visible={visible} animationType='slide'>
			<SafeAreaView style={styles.container}>
				<View>
					<Text style={styles.text}>Rate by stars</Text>
				</View>
				<View>
					<View style={styles.button}>
						<Button
							title='1'
							onPress={() => {
								handleRating(1)
							}}
						/>
						<Ionicons name={"ios-star"} color={"#554AF0"} size={20} />
					</View>
					<View style={styles.button}>
						<Button
							title='2'
							onPress={() => {
								handleRating(2)
							}}
						/>
						<Ionicons name={"ios-star"} color={"#554AF0"} size={20} />
					</View>
					<View style={styles.button}>
						<Button
							title='3'
							onPress={() => {
								handleRating(3)
							}}
						/>
						<Ionicons name={"ios-star"} color={"#554AF0"} size={20} />
					</View>
					<View style={styles.button}>
						<Button
							title='4'
							onPress={() => {
								handleRating(4)
							}}
						/>
						<Ionicons name={"ios-star"} color={"#554AF0"} size={20} />
					</View>
					<View style={styles.button}>
						<Button
							title='5'
							onPress={() => {
								handleRating(5)
							}}
						/>
						<Ionicons name={"ios-star"} color={"#554AF0"} size={20} />
					</View>
				</View>
				<View>
					<Button title='Go back' onPress={handleGoBack}></Button>
				</View>
			</SafeAreaView>
		</Modal>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		fontSize: 20,
		fontWeight: "bold"
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	}
})
export default Rating
