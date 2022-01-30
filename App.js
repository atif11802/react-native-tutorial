import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ourbutton from "./src/screens/Ourbutton";

export default function App() {
	return (
		<View style={styles.container}>
			<Ourbutton />
		</View>
	);
}

const styles = StyleSheet.create({});
