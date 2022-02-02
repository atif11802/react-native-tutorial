import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NetflixCard from "./src/components/NetflixCard";

export default function App() {
	return (
		<View style={styles.container}>
			<NetflixCard />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#999",
		width: "100%",
	},
});
