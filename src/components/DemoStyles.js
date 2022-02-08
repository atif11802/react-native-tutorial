import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DemoStyles = () => {
	return (
		<View style={styles.parentView}>
			<Text style={[styles.childText, styles.commonStyle]}>hello</Text>
			<Text style={[styles.childText2, styles.commonStyle]}>hello</Text>
			<Text style={[styles.childText3, styles.commonStyle]}>hello</Text>
		</View>
	);
};

export default DemoStyles;

const styles = StyleSheet.create({
	parentView: {
		width: "95%",
		marginTop: 100,
		marginHorizontal: 10,
		borderWidth: 3,
		borderColor: "red",
	},
	childText: {
		backgroundColor: "#97BC62FF",
		borderColor: "#2C5F2D",
		color: "#2C5F2D",
		marginTop: 30,
	},
	childText2: {
		backgroundColor: "#97BC62FF",
		borderColor: "#2C5F2D",
		color: "#2C5F2D",
	},
	childText3: {
		backgroundColor: "#97BC62FF",
		borderColor: "#2C5F2D",
		color: "#2C5F2D",
	},
	commonStyle: {
		fontSize: 29,
		// paddingLeft: 30,
		// paddingTop: 30,
		// paddingBottom: 30,
		// borderRadius: 30,
		paddingVertical: 20,
		paddingHorizontal: 30,
		textAlign: "center",
		borderWidth: 5,
		// borderColor: "red",
		marginBottom: 50,
		// marginLeft: 50,
		// marginRight: 50,
		marginHorizontal: 50,
	},
});
