import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChaellengeComponent from "./src/screens/ChaellengeComponent";

export default function App() {
	return (
		<View style={styles.container}>
			<ChaellengeComponent />
		</View>
	);
}

const styles = StyleSheet.create({});
