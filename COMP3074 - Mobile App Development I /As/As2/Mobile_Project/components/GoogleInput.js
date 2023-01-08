import { View, StyleSheet } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import React, { useRef } from "react"
const GOOGLE_PLACES_API_KEY = "AIzaSyCA0cDy_zq1oqRi8b55FARtcNAAgCTzFjc" // never save your real api key in a snack!

const GoogleInput = props => {
	const placesRef = useRef()
	
	const onChange = () => {
		props.onChange(placesRef.current?.getAddressText())
	}
	onChange()
	return (
		<View style={styles.container}>
			<GooglePlacesAutocomplete
				placeholder='Address'
				query={{
					key: GOOGLE_PLACES_API_KEY,
					language: "en" // language of the results
				}}
				ref={placesRef}
				onFail={error => console.error(error)}
				requestUrl={{
					url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api",
					useOnPlatform: "web"
				}} // this in only required for use on the web. See https://git.io/JflFv more for details.
				
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ecf0f1",
		zIndex: 23,
		marginVertical: 10
	}
})

export default GoogleInput
