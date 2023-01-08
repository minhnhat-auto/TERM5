import React, { useState, useEffect } from "react"
import { PROVIDER_GOOGLE } from "react-native-maps"
import MapView from "react-native-maps"
import { Marker } from "react-native-maps"
import { View, StyleSheet, Button } from "react-native"
import Geocoder from "react-native-geocoding"
import getDirections from "react-native-google-maps-directions"

function ShowMap({ route }) {
	const { address } = route.params
	const [location, setLocation] = useState({})
	// let location = {}
	const handleGetDirections = () => {
		const data = {
			source: {
				latitude: 43.667175,
				longitude: -79.4065421
			},
			destination: {
				latitude: location.lat,
				longitude: location.lng
			},
			params: [
				{
					key: "travelmode",
					value: "driving" // may be "walking", "bicycling" or "transit" as well
				}
			]
		}

		getDirections(data)
	}

	useEffect(() => {
		Geocoder.init("AIzaSyAO3mj2AZudKvECBf_lv-9IvWynhRj82kI")
		Geocoder.from(address)
			.then(json => {
				let loc = json.results[0].geometry.location

				setLocation(loc)
			})
			.catch(error => console.warn(error))

		// Geolocation.getCurrentPosition(
		// 	position => {
		// 		console.log(position)
		// 	},
		// 	error => {
		// 		// See error code charts below.
		// 		console.log(error.code, error.message)
		// 	},
		// 	{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
		// )
	}, [])

	return (
		<View>
			<MapView
				style={styles.map}
				provider={PROVIDER_GOOGLE}
				initialRegion={{
					latitude: location.lat,
					longitude: location.lng
				}}
			>
				<Marker coordinate={{ latitude: location.lat, longitude: location.lng }}></Marker>
				<Button title='Get direction from Spadina station' color='#f10303' onPress={handleGetDirections}></Button>
			</MapView>
		</View>
	)
}
const styles = StyleSheet.create({
	map: {
		width: "100%",
		height: "100%"
	}
})
export default ShowMap
