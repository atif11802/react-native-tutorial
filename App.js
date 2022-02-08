import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DemoStyles from "./src/components/DemoStyles";

export default function App() {
	return (
		<View style={styles.container}>
			<DemoStyles />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
});
