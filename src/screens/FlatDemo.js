import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const FlatDemo = () => {
	const names = [
		{
			name: "Atif",
		},
		{
			name: "Aslam",
		},
		{
			name: "ratul",
		},
		{
			name: "sharna",
		},
	];

	return (
		<FlatList
			data={names}
			renderItem={(element) => {
				console.log(element);
				return (
					<Text style={styles.textStyle} key={element.index}>
						{element.item.name}
					</Text>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30,
	},
});

export default FlatDemo;
