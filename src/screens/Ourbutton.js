import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";

const Ourbutton = () => {
	return (
		<View>
			<Text style={styles.textStyle}>Ourbutton</Text>
			<Button
				title='Press me'
				color='#f194ff'
				onPress={() => {
					console.log("hello");
					Alert.alert("Button with adjusted color pressed");
				}}
				disabled
			/>
		</View>
	);
};

export default Ourbutton;

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30,
		color: "red",
		marginVertical: 200,
		textAlign: "center",
	},
});
