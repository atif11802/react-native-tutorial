import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomComponent from "./src/screens/CustomComponent";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>hello world</Text>
			<CustomComponent />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
