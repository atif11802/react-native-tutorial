import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HookEffect from "./src/screens/HookEffect";

export default function App() {
	return (
		<View style={styles.container}>
			<HookEffect />
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
