import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomComponents1 = () => {
	const [name, setName] = useState("ratul");
	return (
		<View>
			<Text style={styles.text1}>Welcome to this channel</Text>
			<Text style={styles.text2}>love react native</Text>
			<Text style={styles.text3}>hi,my name is {name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text1: {
		color: "blue",
		fontWeight: "bold",
		fontSize: 40,
	},
	text2: {
		fontSize: 30,
	},
});

export default CustomComponents1;
