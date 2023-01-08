import React, { useState } from "react"
import data from "../database.json"
export let RestaurantList = React.createContext()
function RestaurantContext({ children }) {
	const [restaurantList, setRestaurantList] = useState(data)
	return <RestaurantList.Provider value={{ restaurantList, setRestaurantList }}>{children}</RestaurantList.Provider>
}

export default RestaurantContext
