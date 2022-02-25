import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
} from "react-native";
import React, { useState } from "react";

const ColorGenerator = () => {
	const [newColor, setNewColor] = useState([]);

	const randomColor = () => {
		const red = Math.floor(Math.random() * 256);
		const green = Math.floor(Math.random() * 256);
		const blue = Math.floor(Math.random() * 256);
		const color = `rgb(${red},${green},${blue})`;
		setNewColor([...newColor, color]);
	};

	// console.log(newColor);

	return (
		<View>
			<TouchableOpacity
				onPress={() => randomColor()}
				activeOpacity={0.2}
				style={styles.buttonStyle}
			>
				<Text style={styles.textStyle}>Generate Random error</Text>
			</TouchableOpacity>
			<FlatList
				keyExtractor={(item) => item}
				data={newColor}
				renderItem={({ item }) => (
					<View style={styles.imageContainer}>
						<Text
							style={{
								backgroundColor: item,
								width: 200,
								height: 100,
								borderRadius: 5,
								color: "black",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							{item}
						</Text>
					</View>
				)}
			/>
		</View>
	);
};

export default ColorGenerator;

const styles = StyleSheet.create({
	buttonStyle: {
		backgroundColor: "#0082c8",
		padding: 10,
		position: "fixed",
		zIndex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	textStyle: {
		textTransform: "uppercase",
	},
	imageContainer: {
		alignItems: "center",
		marginTop: 20,
		marginBottom: 20,
	},
});
