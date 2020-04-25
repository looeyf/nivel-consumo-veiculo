import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

// import { Container } from './styles';

export default function Homepage() {
  const [kmPercorridos, setKmPercorridos] = useState("");
  const [litrosGasolina, setLitrosGasolina] = useState("");

  function handleSubmit() {
    let media = kmPercorridos / litrosGasolina;
    let nota = "";

    switch (true) {
      case media > 12:
        nota = "A";
        break;
      case media > 10 && media <= 12:
        nota = "B";
        break;
      case media > 8 && media <= 10:
        nota = "C";
        break;
      case media > 4 && media <= 8:
        nota = "D";
        break;
      case media <= 4:
        nota = "E";
        break;
      default:
        console.log("Fora do intervalo.");
    }

    setKmPercorridos("");
    setLitrosGasolina("");

    return Alert.alert(
      "Resultado",
      `A média de consumo do seu veículo foi de: ${media.toFixed(
        2
      )}\n\nNível de consumo: ${nota}`,
      [{ text: "OK" }],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <Text>KM percorridos</Text>
      <TextInput
        style={styles.input}
        value={kmPercorridos}
        onChangeText={(value) => setKmPercorridos(value)}
        keyboardType="number-pad"
      />

      <Text>Gasolina usada (litros)</Text>
      <TextInput
        style={styles.input}
        value={litrosGasolina}
        onChangeText={(value) => setLitrosGasolina(value)}
        keyboardType="number-pad"
      />

      <Button
        style={styles.submitButton}
        title="Calcular"
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfcfc",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    margin: 15,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  submitButton: {
    marginTop: 30,
  },
});
