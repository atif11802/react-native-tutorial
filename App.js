import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.innerText}>hello cheter baal</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#111",
		alignItems: "center",
		justifyContent: "center",
	},
	innerText: {
		color: "white",
	},
});
