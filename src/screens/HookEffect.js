import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";

const HookEffect = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getUserData = async () => {
			try {
				setLoading(true);
				const response = await fetch("https://fakestoreapi.com/products");
				const responseData = await response.json();
				setData(responseData);
				setLoading(false);
			} catch (err) {
				console.log(err);
				setLoading(false);
			}
		};
		getUserData();
	}, []);
	console.log(data);

	return (
		<View style={styles.container}>
			<Text>Api data</Text>
			{loading && <Text>Loading...</Text>}

			<FlatList
				keyExtractor={(item) => item.id}
				data={data}
				renderItem={({ item }) => (
					<View style={styles.card}>
						<Image
							style={{ width: 100, height: 100 }}
							source={{ uri: `${item.image}` }}
						/>
						<Text style={styles.title}>{item.title}</Text>
						<Text style={styles.price}>{item.price}</Text>
					</View>
				)}
			/>
		</View>
	);
};

export default HookEffect;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	card: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		width: 300,
		borderColor: "black",
		borderWidth: 1,
		marginTop: 10,
	},
	title: {
		fontSize: 20,
		marginTop: 10,
	},
	price: {
		fontSize: 15,
		marginTop: 10,
	},
});
