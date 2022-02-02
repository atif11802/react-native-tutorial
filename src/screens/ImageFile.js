import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardDetail from "../components/CardDetail";

const ImageFile = () => {
	return (
		<View style={styles.ImageFile}>
			<Text>image</Text>
			<CardDetail
				textData='hello this is 1st image'
				imgSrc={require("../../assets/test1.jpg")}
			/>
			<CardDetail
				textData='hello this is 2nd image'
				imgSrc={require("../../assets/test2.jpg")}
			/>
			<CardDetail
				textData='hello this is 3rd image'
				imgSrc={require("../../assets/test3.jpg")}
			/>
		</View>
	);
};

export default ImageFile;

const styles = StyleSheet.create({
	ImageFile: {
		alignItems: "center",
		marginTop: 50,
	},
});
