import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

export default function MovieFavScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Mis Películas Favoritas</Text>
            <Text style={styles.description}>Tres peliculas que me gustan.</Text>

            <Image source={require('../images/narcos.png')} style={styles.image} />
            <Image source={require('../images/ver.png')} style={styles.image} />
            <Image source={require('../images/pred.png')} style={styles.image} />

            <TouchableOpacity style={styles.buttonReturn} onPress={() => navigation.navigate("AboutMe")}>
                <Text style={styles.buttonTextReturn}>Volver a Acerca de Mí</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

// ... los estilos se mantienen exactamente igual que en la versión anterior ...
const styles = StyleSheet.create({
    container: { flexGrow: 1, alignItems: 'center', padding: 20, backgroundColor: '#000' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#f1c40f' },
    description: { fontSize: 16, marginBottom: 20, color: '#ccc' },
    image: { width: 200, height: 280, borderRadius: 10, marginBottom: 15 },
    buttonReturn: { marginTop: 20, paddingVertical: 12, paddingHorizontal: 25, backgroundColor: '#333', borderRadius: 8 },
    buttonTextReturn: { color: '#f1c40f', fontWeight: 'bold' }
});