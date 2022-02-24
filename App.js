import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CounterNumber from "./src/screens/CounterNumber";

export default function App() {
	return (
		<View style={styles.container}>
			<CounterNumber />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		minHeight: "100%",
	},
});
