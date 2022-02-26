import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";
import { TouchableOpacity } from "react-native-web";
import { BadScript_400Regular } from "@expo-google-fonts/bad-script";
import { DenkOne_400Regular } from "@expo-google-fonts/denk-one";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const ContactPage = () => {
	const [checked, setChecked] = React.useState(false);
	const [name, setName] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleCheck = () => {
		if (name === "atif" && password === "ratul") {
			Alert.alert(`Welcome ${name}`);
		} else {
			Alert.alert(`Wrong Credentials`);
		}
	};

	let [fontsLoaded, error] = useFonts({
		BadScript_400Regular,
		DenkOne_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<View style={styles.mainContainer}>
			<Text style={styles.mainHeader}>Login Form</Text>
			<Text style={styles.description}>
				You can reach us anytime via ratul@gmail.com
			</Text>
			<View style={styles.inputContainer}>
				<Text style={styles.labels}>Enter your name</Text>
				<TextInput
					style={styles.inputStyle}
					autoCapitalize='none'
					autoCorrect={false}
					value={name}
					onChangeText={(text) => setName(text)}
				/>
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.labels}>Enter your Password</Text>
				<TextInput
					style={styles.inputStyle}
					autoCapitalize='none'
					autoCorrect={false}
					secureTextEntry={true}
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
			</View>
			<View style={styles.wrapper}>
				<Checkbox
					value={checked}
					onValueChange={() => {
						setChecked(!checked);
					}}
					color={checked ? "#1CB5E0" : "gray"}
				/>
				<Text style={styles.wrapperText}>
					I agree to the Terms and Conditions
				</Text>
			</View>
			<TouchableOpacity
				activeOpacity={0.5}
				style={[
					styles.buttonStyle,
					{ backgroundColor: checked ? "#1CB5E0" : "gray" },
				]}
				disabled={!checked}
				onPress={() => handleCheck()}
			>
				<Text style={styles.buttonText}>Submit</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ContactPage;

const styles = StyleSheet.create({
	mainContainer: {
		height: "100vh",
		backgroundColor: "#fff",
		paddingHorizontal: 30,
		paddingTop: 30,
	},
	mainHeader: {
		fontSize: 25,
		fontFamily: "DenkOne_400Regular",
	},
	description: {
		fontSize: 15,
		marginTop: 10,
		textTransform: "capitalize",
		fontFamily: "DenkOne_400Regular",
	},
	inputContainer: {
		marginTop: 20,
	},
	labels: {
		fontSize: 13,
		marginBottom: 5,
		textTransform: "capitalize",
		fontFamily: "DenkOne_400Regular",
	},
	inputStyle: {
		borderColor: "gray",
		width: "100%",
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		fontFamily: "DenkOne_400Regular",
	},
	wrapper: {
		marginVertical: 20,
		display: "flex",
		flexDirection: "row",
	},
	wrapperText: {
		marginLeft: 10,
		fontFamily: "DenkOne_400Regular",
	},
	buttonStyle: {
		width: "100%",
		borderRadius: 10,
	},
	buttonText: {
		padding: 15,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontFamily: "DenkOne_400Regular",
	},
});
