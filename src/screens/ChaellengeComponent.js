import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ChaellengeComponent() {
	const names = [
		{ id: 1, name: "Atif", age: "20", status: "single" },
		{ id: 2, name: "Aslam", age: "23", status: "single" },
		{ id: 3, name: "ratul", age: "24", status: "single" },
		{ id: 4, name: "sharna", age: "25", status: "single" },
		{ id: 5, name: "sharna", age: "26", status: "single" },
		{ id: 6, name: "sharna", age: "27", status: "single" },
		{ id: 7, name: "sharna", age: "28", status: "single" },
		{ id: 8, name: "sharna", age: "29", status: "single" },
	];
	return (
		<View>
			<Text>Challenge 2</Text>
			<FlatList
				// numColumns={2}
				showsHorizontalScrollIndicator={false}
				horizontal
				style={styles.listStyles}
				data={names}
				renderItem={(element) => {
					console.log(element.item);
					return (
						<View style={styles.Item}>
							<Text>{element.item.name}</Text>
							<Text>{element.item.age}</Text>
							<Text>{element.item.status}</Text>
						</View>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	listStyles: {
		margin: 20,
		padding: 10,
	},
	Item: {
		padding: 20,
		backgroundColor: "blue",
		margin: 10,
		textAlign: "center",
		width: 120,
	},
});
