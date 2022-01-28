import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageFile = () => {
	return (
		<View style={styles.ImageFile}>
			<Text>image</Text>
			<Image
				style={styles.imageStyle}
				source={require("../../assets/test1.jpg")}
			/>
			<Image
				style={styles.imageStyle}
				source={require("../../assets/test2.jpg")}
			/>
			<Image
				style={styles.imageStyle}
				source={require("../../assets/test3.jpg")}
			/>
		</View>
	);
};

export default ImageFile;

const styles = StyleSheet.create({
	ImageFile: {
		marginTop: 50,
	},
	imageStyle: {
		width: 300,
		height: 300,
		marginTop: 50,
	},
});
