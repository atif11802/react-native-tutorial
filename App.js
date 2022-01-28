import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageFile from "./src/screens/ImageFile";

export default function App() {
	return (
		<View style={styles.container}>
			<ImageFile />
		</View>
	);
}

const styles = StyleSheet.create({});
