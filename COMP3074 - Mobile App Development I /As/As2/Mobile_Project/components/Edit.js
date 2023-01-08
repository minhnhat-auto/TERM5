import React, { useContext } from "react"
import { StyleSheet, SafeAreaView, Text, View, TextInput, Button, ScrollView } from "react-native"
import { Formik } from "formik"
import Ionicons from "react-native-vector-icons/Ionicons"
import GoogleInput from "./GoogleInput"
import uuid from "react-native-uuid"
import * as yup from "yup"
import { RestaurantList } from "./RestaurantContext"

const RestaurantSchema = yup.object({
	name: yup.string().required("Name is required").min(3),
	phone: yup.string().required("Phone is required").min(10),
	tags: yup.string().required("Tag is required"),
	description: yup.string().required("Description is required")
})

export default function Edit({ navigation, route }) {
	const [address, setAddress] = React.useState("")
	let { name, tags, phone, description, id } = route.params
	// const [restaurant, setRestaurant] = React.useState([])
	let { restaurantList, setRestaurantList } = useContext(RestaurantList)
	const [error, setError] = React.useState("")
	const onChange = text => {
		setAddress(text)
	}

	// console.log(restaurant)

	return (
		<SafeAreaView style={styles.view}>
			<View style={styles.container}>
				<Text style={styles.title}>Edit your restaurant</Text>
				<Formik
					style={styles.form}
					validationSchema={RestaurantSchema}
					initialValues={{
						name: name,
						phone: phone,
						tags: tags.toString(),
						description: description
					}}
					onSubmit={(values, actions) => {
						if (!address || address === "") {
							setError("Address is required")
							return
						}

						let copyOfRestaurantList = restaurantList
						let newRestaurantList = copyOfRestaurantList.map(restaurant => {
							if (restaurant.id == id) {
								restaurant.name = values.name
								restaurant.phone = values.phone
								restaurant.address = address
								restaurant.tags = values.tags.split(",")
								restaurant.description = values.description
							}
							return restaurant
						})

						setRestaurantList(newRestaurantList)

						actions.resetForm()
						// console.log(restaurantList)
						setAddress("")

						navigation.navigate("EditSuccess", { newRestaurantList })
					}}
				>
					{props => (
						<View>
							<Text style={styles.error}>{props.errors.name}</Text>
							<TextInput
								style={styles.input}
								placeholder='Name of the restaurant'
								onChangeText={props.handleChange("name")}
								value={props.values.name}
							/>
							{error && <Text style={styles.error}>{error}</Text>}
							<ScrollView keyboardShouldPersistTaps={"always"}>
								<GoogleInput onChange={onChange} />
							</ScrollView>

							<Text style={styles.error}>{props.errors.phone}</Text>
							<TextInput
								style={styles.input}
								placeholder='Phone number'
								onChangeText={props.handleChange("phone")}
								value={props.values.phone}
							/>

							<Text style={styles.error}>{props.errors.tags}</Text>
							<TextInput
								style={styles.input}
								placeholder='Tag'
								onChangeText={props.handleChange("tags")}
								value={props.values.tags}
							/>

							<Text style={styles.error}>{props.errors.description}</Text>
							<TextInput
								style={styles.description}
								placeholder='Description'
								onChangeText={props.handleChange("description")}
								value={props.values.description}
							/>

							<View style={styles.btn}>
								<Ionicons name='add-circle' size={30} color='white' />
								<Button color='white' title='Edit' onPress={props.handleSubmit} />
							</View>
						</View>
					)}
				</Formik>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	view: {
		backgroundColor: "F5F5F5",
		textAlign: "center"
	},
	container: {
		marginHorizontal: 20
	},
	title: {
		fontSize: 26,
		fontWeight: "bold",
		color: "#554AF0",
		textAlign: "center",
		marginVertical: 20
	},
	text: {
		fontSize: 20,
		margin: 10
	},
	textScreen: {
		fontSize: 26,
		fontWeight: "bold",
		color: "white"
	},
	topNav: {
		backgroundColor: "#554AF0",
		paddingLeft: 25,
		paddingBottom: 18,
		width: "100%"
	},
	form: {
		width: "100%"
	},
	input: {
		borderWidth: 1,
		borderColor: "#ddd",
		padding: 12,
		fontSize: 18,
		borderRadius: 12,
		width: "100%",
		backgroundColor: "#fff"
	},

	description: {
		borderWidth: 1,
		borderColor: "#ddd",
		padding: 12,
		fontSize: 18,
		borderRadius: 12,
		width: "100%",
		backgroundColor: "#fff"
		// height: 100
	},
	btn: {
		display: "flex",
		flexDirection: "row",
		alignSelf: "center",
		alignItems: "center",
		backgroundColor: "#554AF0",
		display: "inline-block",
		padding: 10,
		borderRadius: 12,
		marginTop: 10
	},
	error: {
		color: "red",
		fontSize: 13,
		marginTop: 10
	}
})
