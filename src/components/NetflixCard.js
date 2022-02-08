import { StyleSheet, Text, View, Image, Linking } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";
import {
	JosefinSans_100Thin,
	JosefinSans_200ExtraLight,
	JosefinSans_300Light,
	JosefinSans_400Regular,
	JosefinSans_500Medium,
	JosefinSans_700Bold,
	JosefinSans_100Thin_Italic,
	JosefinSans_200ExtraLight_Italic,
	JosefinSans_400Regular_Italic,
	JosefinSans_500Medium_Italic,
	JosefinSans_600SemiBold_Italic,
	JosefinSans_700Bold_Italic,
} from "@expo-google-fonts/josefin-sans";
import { Allura_400Regular } from "@expo-google-fonts/allura";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const NetflixCard = () => {
	let [fontsLoaded] = useFonts({
		JosefinSans_100Thin,
		JosefinSans_200ExtraLight,
		JosefinSans_300Light,
		JosefinSans_400Regular,
		JosefinSans_500Medium,
		JosefinSans_700Bold,
		JosefinSans_100Thin_Italic,
		JosefinSans_200ExtraLight_Italic,
		JosefinSans_400Regular_Italic,
		JosefinSans_500Medium_Italic,
		JosefinSans_600SemiBold_Italic,
		JosefinSans_700Bold_Italic,
		Allura_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	const onPress = () => {
		console.log("hello");
		Linking.openURL("https://www.netflix.com/bd/");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.textH1}>Netflix card</Text>
			<View style={styles.poster}>
				<Image
					style={styles.img}
					source={{
						uri: "https://www.cheatsheet.com/wp-content/uploads/2022/01/Nam-ra-character-in-All-of-Us-Are-Dead-and-season-2-1200x644.jpg",
					}}
				/>

				<View style={styles.posterInfo}>
					<Text style={styles.poster__title}>all of us are dead</Text>
					<Text style={styles.poster__text}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea earum
						assumenda facere iusto ratione laborum id. Quod non quidem delectus
						pariatur repudiandae unde est consequuntur, quos quo vel tempora
						odit.
					</Text>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={onPress}
					activeOpacity={0.9}
				>
					<Text style={styles.buttonText}>Go to Netflix</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default NetflixCard;

const styles = StyleSheet.create({
	container: {
		padding: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	textH1: {
		fontSize: 40,
		textAlign: "center",
		color: "rgb(0, 255, 0)",
		fontFamily: "Allura_400Regular",
	},
	img: {
		width: "100%",
		height: undefined,
		aspectRatio: 1,
		marginTop: 30,
		borderRadius: 30,
	},
	poster: {
		width: 310,
		borderWidth: 2,
		alignItems: "center",
		borderRadius: 40,
		padding: 15,
	},
	poster__title: {
		fontSize: 30,
		color: "#222",
		textAlign: "center",
		textShadowOffset: { width: 3, height: 3 },
		textShadowRadius: 10,
		textShadowColor: "rgba(0,0,0,0.5)",
		textTransform: "capitalize",

		// fontStyle: "italic",
		// fontWeight: "light",
		// fontVariant: ["small-caps"],
		// letterSpacing: 1,
	},
	poster__text: {
		textAlign: "justify",

		fontSize: 20,
		color: "#111",
		fontFamily: "Allura_400Regular",
		letterSpacing: 1,
		lineHeight: 22,
	},
	button: {
		backgroundColor: "blue",
		alignItems: "center",
		padding: 20,
	},
	buttonText: {
		color: "white",
	},
});
