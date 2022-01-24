import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const FlatDemo = () => {
	const names = [
		{ id: 1, name: "Atif" },
		{ id: 2, name: "Aslam" },
		{ id: 3, name: "ratul" },
		{ id: 4, name: "sharna" },
		{ id: 5, name: "sharna" },
		{ id: 6, name: "sharna" },
		{ id: 7, name: "sharna" },
		{ id: 8, name: "sharna" },
	];

	return (
		<FlatList
			style={styles.listStyles}
			keyExtractor={(item) => item.id}
			data={names}
			horizontal
			inverted
			// numColumns={2}
			showsHorizontalScrollIndicator={false}
			renderItem={(element) => {
				console.log(element);
				return <Text style={styles.textStyle}>{element.item.name}</Text>;
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20,
		backgroundColor: "red",
		padding: 30,
		margin: 10,
		color: "white",
	},
	listStyles: {
		textAlign: "center",
		margin: 20,
		padding: 10,
	},
});

export default FlatDemo;
