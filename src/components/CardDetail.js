import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const CardDetail = ({ textData, imgSrc }) => {
	return (
		<View>
			<Text style={styles.text}>{textData}</Text>
			<Image style={styles.imageStyle} source={imgSrc} />
		</View>
	);
};

export default CardDetail;

const styles = StyleSheet.create({
	text: {
		textAlign: "center",
		marginTop: 50,
		fontSize: 20,
		fontWeight: "bold",
	},
	imageStyle: {
		width: 300,
		height: 300,
		marginTop: 50,
	},
});
