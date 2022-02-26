import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ContactPage from "./src/screens/ContactPage";

export default function App() {
	return (
		<View style={styles.container}>
			<ContactPage />
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
