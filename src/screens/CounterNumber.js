import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function CounterNumber() {
	const [counter, setCounter] = React.useState(0);

	return (
		<View style={styles.container}>
			<Text>CounterNumber</Text>
			<View style={styles.counter}>
				<Text>{counter}</Text>
			</View>
			<TouchableOpacity
				style={styles.button}
				onPress={() => setCounter(counter + 1)}
			>
				<Text>Increment</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={() => setCounter(0)}>
				<Text>Reset</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => setCounter(counter - 1)}
			>
				<Text>Decrement</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginTop: "100px",
	},
	counter: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	button: {
		backgroundColor: "#999",
		padding: "10px",
		borderRadius: "5px",
		marginTop: "10px",
	},
});
