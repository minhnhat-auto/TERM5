import React, { useState, useContext, useEffect } from "react"
import data from "../database.json"
import { RestaurantList } from "./RestaurantContext"
import { View, Text, TextInput, StyleSheet, Pressable, FlatList } from "react-native"
import SearchItem from "./SearchItem"

function Search({ navigation }) {
	const [searchBy, setSearchBy] = useState("name")
	const [restaurants, setRestaurants] = useState([])
	const [searchRestaurant, setSearchRestaurant] = useState("")
	let { restaurantList } = useContext(RestaurantList)

	useEffect(() => {
		setRestaurants(restaurantList)
	}, [restaurantList])
	const handleSearch = async value => {
		setSearchRestaurant(value)
		if (searchBy === "name") {
			const results = restaurantList.filter(restaurant => {
				return restaurant.name.toLowerCase().includes(value.toLowerCase()) || value === ""
			})

			setRestaurants(results)
		} else if (searchBy === "tag") {
			const results = restaurantList.filter(restaurant => {
				return restaurant.tags.includes(value.toLowerCase()) || value === ""
			})

			setRestaurants(results)
		}
	}
	const changeSearchBy = searchBy => {
		setSearchBy(searchBy)
	}
	return (
		<View style={styles.container}>
			<View style={styles.search}>
				<View style={styles.textInputContainer}>
					<TextInput
						placeholder={`Search by ${searchBy}`}
						style={styles.textInput}
						onChangeText={handleSearch}
						value={searchRestaurant}
					></TextInput>
				</View>
				<View style={styles.searchByContainer}>
					<View style={searchBy === "name" ? styles.searchBy : null}>
						<Pressable
							style={({ pressed }) => {
								return pressed && styles.pressedItem
							}}
							onPress={() => {
								changeSearchBy("name")
							}}
						>
							<Text style={searchBy === "name" ? styles.searchByText : null}>Name</Text>
						</Pressable>
					</View>
					<View style={searchBy === "tag" ? styles.searchBy : { alignItems: "center" }}>
						<Pressable
							style={({ pressed }) => {
								return pressed && styles.pressedItem
							}}
							onPress={() => {
								changeSearchBy("tag")
							}}
						>
							<Text style={searchBy === "tag" ? styles.searchByText : null}>Tag</Text>
						</Pressable>
					</View>
				</View>
			</View>
			<View style={styles.result}>
				<FlatList
					data={restaurants}
					renderItem={({ item }) => {
						return (
							<SearchItem
								id={item.id}
								name={item.name}
								tags={item.tags}
								rating={item.rating} 
								phone={item.phone}
								navigation={navigation}
								address={item.address}
								description={item.description}
							/>
						)
					}}
					keyExtractor={item => item.id.toString()}
				></FlatList>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column"
	},
	search: {
		flex: 1,
		flexDirection: "row",
		margin: 10,
		alignItems: "center"
	},
	textInputContainer: {
		flex: 1
	},
	textInput: {
		borderRadius: 10,
		borderWidth: 0.5,
		padding: 10,
		fontSize: 15
	},
	searchByContainer: {
		flex: 1,
		flexDirection: "row",
		padding: 5,
		justifyContent: "space-around",
		alignItems: "center"
	},
	searchBy: {
		padding: 10,
		backgroundColor: "#554AF0",
		borderRadius: 10
	},
	searchByText: {
		color: "white",
		fontSize: 15
	},
	result: {
		flex: 6
	},
	pressedItem: {
		opacity: 0.5
	}
})
export default Search
