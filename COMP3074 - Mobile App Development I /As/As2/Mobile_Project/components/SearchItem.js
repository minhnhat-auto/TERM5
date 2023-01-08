import React from "react"
import { View, StyleSheet, Image, Text, Pressable } from "react-native"

import Ionicons from "@expo/vector-icons/Ionicons"
function SearchItem({ name, tags, rating, phone, address, navigation, description, id}) {
	let stars = []
	for (let i = 0; i < rating; i++) {
		stars.push(<Ionicons key={i} name={"ios-star"} color={"#554AF0"} />)
	}

	const handleDetails = () => {
		navigation.navigate("Details", { name, tags, rating, phone, address , description, id})
	}
	return (
		<Pressable onPress={handleDetails}>
			<View style={styles.container}>
				<View>
					<Image style={styles.image} source={require("../assets/restaurant.jpg")}></Image>
				</View>
				<View style={styles.textView}>
					<View>
						<Text style={styles.restaurantName}>{name}</Text>
					</View>
					<View>
						<Text style={styles.tags}>Tags: {tags.map(tag => tag + ", ")}</Text>
					</View>
					<View style={styles.stars}>
						<View style={{ flex: 1, flexDirection: "row" }}>{stars}</View>
					</View>
					<View>
						<Text style={styles.phone}>Phone #: {phone}</Text>
					</View>
				</View>
			</View>
		</Pressable>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		borderWidth: 0.5,
		borderRadius: 10,
		marginHorizontal: 20,
		marginTop: 10
		// padding: 10,
	},
	image: {
		width: 100,
		height: 100,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10
	},
	textView: {
		flex: 2
	},
	restaurantName: {
		textAlign: "center",
		fontSize: 17,
		fontWeight: "bold",
		marginTop: 5
	},
	tags: {
		fontSize: 15,
		marginLeft: 10,
		marginTop: 5
	},
	phone: {
		marginLeft: 10,
		marginTop: 3
	},
	stars: {
		marginLeft: 10,
		marginTop: 3
	}
})

export default SearchItem
