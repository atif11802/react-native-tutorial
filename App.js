import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ColorGenerator from "./src/project/ColorGenerator";

export default function App() {
	return (
		<View style={styles.container}>
			<ColorGenerator />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		minHeight: "100vh",
		marginTop: StatusBar.currentHeight,
	},
});
