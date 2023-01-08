import React, { useEffect } from "react"
import { View, Image, StyleSheet, Text } from "react-native"
import { StatusBar } from "expo-status-bar"
function Loading({ navigation }) {
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate("Main")
		}, 2000)
	}, [])
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			<Image source={require("../assets/logo.png")}></Image>
			<Text style={styles.text}>Restaurant Guild</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#554AF0"
	},
	text: {
		color: "white",
		fontSize: 30,
		marginTop: 10
	}
})
export default Loading
