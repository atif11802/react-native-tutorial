import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function CustomComponent() {
	return (
		<View style={styles.container}>
			<Text style={styles.insiderText}>this is my custom components😄</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	insiderText: {
		color: "red",
	},
});
