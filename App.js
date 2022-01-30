import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ourbutton from "./src/screens/Ourbutton";
import TouchableOpac from "./src/screens/TouchableOpacity";

export default function App() {
	return (
		<View style={styles.container}>
			{/* <Ourbutton /> */}
			<TouchableOpac />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "red",
		height: "100%",
	},
});
