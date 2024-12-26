import { Link, router } from "expo-router"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export default function SignUp() {


	return (
		<View style={styles.container}>
			<Text style={styles.title}>Create account</Text>

			<TouchableOpacity onPress={router.back}>
				<Text style={styles.back} >
					Go back
				</Text>
			</TouchableOpacity>

		</View>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignItems: "center" },
	title: { fontSize: 22, fontWeight: "bold" },
	back: { fontSize: 16, fontWeight: "bold" }

})