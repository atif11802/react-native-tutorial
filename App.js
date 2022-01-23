import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomComponent from "./src/screens/CustomComponent";
import CustomComponents1 from "./src/screens/CustomComponents1";
import FlatDemo from "./src/screens/FlatDemo";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>hello world</Text>
			<CustomComponent />
			<CustomComponents1 />
			<FlatDemo />
		</View>
	);
}

const styles = StyleSheet.create({});
