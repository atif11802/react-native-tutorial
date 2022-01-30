import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react/cjs/react.development";

const TouchableOpac = () => {
	const [count, setCount] = useState(0);
	const onPress = () => setCount((prevCount) => prevCount + 1);
	return (
		<View>
			<View style={styles.countContainer}>
				<Text>Count: {count}</Text>
			</View>

			<TouchableOpacity
				style={styles.button}
				onPress={onPress}
				activeOpacity={0.9}
			>
				<Text>Press Here</Text>
			</TouchableOpacity>
		</View>
	);
};

export default TouchableOpac;

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10,
	},
	countContainer: {
		alignItems: "center",
		padding: 10,
	},
});
