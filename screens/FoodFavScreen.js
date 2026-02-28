import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

export default function FoodFavScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Mis Comidas Favoritas</Text>
            <Text style={styles.description}>Estos son algunos de mis platillos favoritos.</Text>

            <Image source={require('../images/lasaña.png')} style={styles.image} />
            <Image source={require('../images/pizza.png')} style={styles.image} />
            <Image source={require('../images/tacos.png')} style={styles.image} />

            <TouchableOpacity style={styles.buttonReturn} onPress={() => navigation.navigate("AboutMe")}>
                <Text style={styles.buttonTextReturn}>Volver a Acerca de Mí</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flexGrow: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#e67e22' },
    description: { fontSize: 16, marginBottom: 20, color: '#555' },
    image: { width: 250, height: 150, borderRadius: 10, marginBottom: 15 },
    buttonReturn: { marginTop: 20, paddingVertical: 12, paddingHorizontal: 25, backgroundColor: '#ecf0f1', borderRadius: 8 },
    buttonTextReturn: { color: '#2c3e50', fontWeight: 'bold' }
});