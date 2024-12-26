import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { router, Link, useLocalSearchParams, Redirect } from "expo-router"

export default function Home() {
  const { id } = useLocalSearchParams();

  if (!id) {
    return <Redirect href="/" />
  }

  function signUp() {
    router.navigate("/signup")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Home - {id}
      </Text>
      <TouchableOpacity onPress={router.back}>
        <Text>go back</Text>
      </TouchableOpacity>
    </View >
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 32 },
  title: { fontSize: 22, fontWeight: "bold", },
})