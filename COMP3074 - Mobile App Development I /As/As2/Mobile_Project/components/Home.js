import React from "react"
import { View, Image, StyleSheet, Text, Pressable } from "react-native"

function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.image}>
				<Image source={require("../assets/home.png")}></Image>
			</View>
			<View style={styles.textButtonContainer}>
				<View style={{ alignItems: "center" }}>
					<Text style={styles.text}>Discover my team's app</Text>

					<View style={styles.button}>
						<Pressable
							style={({ pressed }) => {
								return pressed && styles.pressedItem
							}}
							onPress={() => {
								navigation.navigate("SearchNavigation")
							}}
						>
							<Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>Search a restaurant</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center"
		// justifyContent: ""
	},
	text: {
		color: "#554AF0",
		fontWeight: "bold",
		fontSize: 25,
		margin: 10
	},
	button: {
		padding: 18,
		backgroundColor: "#554AF0",
		borderRadius: 10,
		margin: 10,
		width: "80%"
	},
	textButtonContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
	image: {
		margin: 10
	},
	pressedItem: {
		opacity: 0.5
	}
})
export default Home
