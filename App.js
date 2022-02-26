import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ContactPage from "./src/screens/ContactPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Contact'>
					<Stack.Screen name='Contact' component={ContactPage} />
					<Stack.Screen name='Home' component={Home} />
				</Stack.Navigator>
			</NavigationContainer>

			{/* <ContactPage /> */}
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
