import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageFile from "./src/screens/ImageFile";
import Ourbutton from "./src/screens/Ourbutton";
import TouchableOpac from "./src/screens/TouchableOpacity";

export default function App() {
	return (
		<View style={styles.container}>
			{/* <Ourbutton />
			<TouchableOpac /> */}
			<ImageFile />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#999",
	},
});
