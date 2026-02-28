import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AboutMeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Acerca de Mí</Text>
            <Text style={styles.description}>
                Bienvenido a mi sección personal. En las siguientes pantallas podrás conocer algunas de mis cosas favoritas.
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FoodFav")}>
                <Text style={styles.buttonText}>Comidas Favoritas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MovieFav")}>
                <Text style={styles.buttonText}>Películas Favoritas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonReturn} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonTextReturn}>Volver a Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 25, backgroundColor: '#fdfbfb' },
    title: { fontSize: 26, fontWeight: 'bold', color: '#2c3e50', textAlign: 'center', marginBottom: 15 },
    description: { fontSize: 16, color: '#7f8c8d', textAlign: 'center', marginBottom: 30, lineHeight: 22 },
    button: { backgroundColor: '#8e44ad', paddingVertical: 14, borderRadius: 10, marginBottom: 15, alignItems: 'center' },
    buttonReturn: { marginTop: 10, alignItems: 'center' },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    buttonTextReturn: { color: '#8e44ad', fontSize: 16, fontWeight: 'bold', textDecorationLine: 'underline' }
});