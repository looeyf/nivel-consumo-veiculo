import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

import styles from "./styles";

// import { Container } from './styles';

export default function Homepage() {
  const [kmPercorridos, setKmPercorridos] = useState("");
  const [litrosGasolina, setLitrosGasolina] = useState("");

  function handleSubmit() {
    let media = kmPercorridos / litrosGasolina;
    let nota = "";

    if (media > 12) {
      nota = "A";
    } else if (media > 10 && media <= 12) {
      nota = "B";
    } else if (media > 8 && media <= 10) {
      nota = "C";
    } else if (media > 4 && media <= 8) {
      nota = "D";
    } else if (media <= 4) {
      nota = "E";
    } else {
      console.warn("Valor fora do intervalo!");
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
