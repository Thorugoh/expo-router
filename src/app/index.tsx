import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { router, Link } from "expo-router"

export default function RootLayout() {

  function signUp() {
    router.navigate("/signup")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={signUp}>
        <Text style={styles.label}>
          Create account
        </Text>
      </TouchableOpacity>
      <Link href={{
        pathname: "/home",
        params: { id: 7 }
      }}>
        Go to Home
      </Link>

    </View >
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 32 },
  label: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 10
  }
})