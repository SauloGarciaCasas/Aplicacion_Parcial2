import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
    const nombreAlumno = "Saulo Daniel Garcia Casas";

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Portafolio de Evidencias</Text>
            <View style={styles.infoCard}>
                <Text style={styles.infoText}>Nombre: {nombreAlumno}</Text>
                <Text style={styles.infoText}>Carrera: Tecnologías de la información</Text>
                <Text style={styles.infoText}>Cuatrimestre: 5° B BIS</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ExampleEvent", { nombre: nombreAlumno })}>
                <Text style={styles.buttonText}>Ir a ExampleEvent</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Counter")}>
                <Text style={styles.buttonText}>Ir a Contador</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAlt} onPress={() => navigation.navigate("AboutMe")}>
                <Text style={styles.buttonText}>Sobre Mí</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f0f4f8' },
    title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#333' },
    infoCard: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 25, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
    infoText: { fontSize: 16, marginBottom: 5, color: '#555' },
    button: { backgroundColor: '#4A90E2', paddingVertical: 14, borderRadius: 10, marginBottom: 12, alignItems: 'center' },
    buttonAlt: { backgroundColor: '#50E3C2', paddingVertical: 14, borderRadius: 10, marginBottom: 12, alignItems: 'center' },
    buttonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' }
});