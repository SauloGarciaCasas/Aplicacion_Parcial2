import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Counter({ navigation }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);
    const handleReduce = () => setCount(count - 1);
    const handleZero = () => setCount(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador</Text>
            <Text style={styles.value}>{count}</Text>
            
            <View style={styles.row}>
                <TouchableOpacity style={styles.buttonAction} onPress={handleReduce}>
                    <Text style={styles.buttonText}>- Restar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonAction} onPress={handleIncrement}>
                    <Text style={styles.buttonText}>+ Sumar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buttonReset} onPress={handleZero}>
                <Text style={styles.buttonText}>Reiniciar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSend} onPress={() => navigation.navigate("ExampleEvent", { contador: count })}>
                <Text style={styles.buttonText}>Enviar a ExampleEvent</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonReturn} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonTextReturn}>Volver a Home</Text>
            </TouchableOpacity>
            
            <Text style={styles.hint}>Aquí veremos estado (useState).</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fafafa' },
    title: { fontSize: 28, fontWeight: '700', textAlign: 'center', marginBottom: 10, color: '#333' },
    value: { fontSize: 64, fontWeight: '800', textAlign: 'center', marginBottom: 20, color: '#4A90E2' },
    row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
    buttonAction: { backgroundColor: '#4A90E2', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 10, width: '48%', alignItems: 'center' },
    buttonReset: { backgroundColor: '#e67e22', paddingVertical: 12, borderRadius: 10, marginBottom: 12, alignItems: 'center' },
    buttonSend: { backgroundColor: '#27ae60', paddingVertical: 12, borderRadius: 10, marginBottom: 12, alignItems: 'center' },
    buttonReturn: { backgroundColor: 'transparent', paddingVertical: 12, borderRadius: 10, borderWidth: 2, borderColor: '#aaa', alignItems: 'center', marginBottom: 20 },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
    buttonTextReturn: { color: '#aaa', fontSize: 16, fontWeight: '600' },
    hint: { fontSize: 14, color: '#888', textAlign: 'center', marginTop: 10 }
});