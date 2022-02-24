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
				activeOpacity={0.3}
				style={styles.button}
				onPress={() => setCounter(counter + 10)}
			>
				<Text style={styles.text}>Increment +10</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => setCounter(0)}
				activeOpacity={0.3}
			>
				<Text style={styles.text}>Reset</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => setCounter(counter - 10)}
				activeOpacity={0.3}
			>
				<Text style={styles.text}>Decrement -10</Text>
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
		backgroundColor: "#c31432",
		padding: "10px",
		borderRadius: "5px",
		marginTop: "10px",
	},
	text: {
		color: "#fff",
		fontSize: "20px",
	},
});
