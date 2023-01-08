import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
function About() {
	let members = ["Do Huynh", "Phoenix Armind Ani", "Vien Nguyen", "Minh Nhat Vo", "Wissam"]
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Our team members</Text>
			</View>
			<View style={styles.membersContainer}>
				{members.map(member => (
					<View style={{ flex: 1, flexDirection: "row", width: "40%", alignItems: "center"}}>
						<View>
							<Ionicons name={"code-slash"} color={"#554AF0"} size={35} />
						</View>
						<View style={{marginLeft:10}}>
							<Text style={styles.memberText}>{member}</Text>
							<Text>Developer</Text>
						</View>
					</View>
				))}
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center"
	},
	title: {
		marginTop: 20,
		color: "#554AF0",
		fontWeight: "bold",
		fontSize: 30
	},
	membersContainer: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
	},
	memberText: {
		fontSize: 20,
		fontWeight: "bold"
	}
})
export default About
