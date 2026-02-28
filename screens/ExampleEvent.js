import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function EventsExample({ navigation, route }) {
    const { nombre, contador } = route.params || {};

    const handlePress = () => {
        const nombreMostrar = nombre ? nombre : "No recibido";
        const contadorMostrar = contador !== undefined ? contador : "No recibido";
        Alert.alert("Datos Recibidos", `Nombre: ${nombreMostrar}\nContador: ${contadorMostrar}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ejemplo de Eventos</Text>
            <Text style={styles.description}>Pantalla para demostrar el paso de parámetros entre rutas.</Text>

            <View style={styles.dataBox}>
                <Text style={styles.dataText}>Nombre recibido: {nombre ? nombre : "Ninguno"}</Text>
                <Text style={styles.dataText}>Contador recibido: {contador !== undefined ? contador : "Ninguno"}</Text>
            </View>

            <TouchableOpacity style={styles.buttonAction} onPress={handlePress}>
                <Text style={styles.buttonText}>Mostrar Alert</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonReturn} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonTextReturn}>Volver a Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#eef2f3' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#2c3e50', marginBottom: 10 },
    description: { textAlign: 'center', marginBottom: 20, color: '#7f8c8d' },
    dataBox: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 20, borderWidth: 1, borderColor: '#bdc3c7' },
    dataText: { fontSize: 16, marginVertical: 4, color: '#34495e' },
    buttonAction: { backgroundColor: '#e74c3c', paddingVertical: 14, borderRadius: 10, marginBottom: 15, alignItems: 'center' },
    buttonReturn: { backgroundColor: 'transparent', paddingVertical: 14, borderRadius: 10, borderWidth: 2, borderColor: '#7f8c8d', alignItems: 'center' },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    buttonTextReturn: { color: '#7f8c8d', fontSize: 16, fontWeight: 'bold' }
});