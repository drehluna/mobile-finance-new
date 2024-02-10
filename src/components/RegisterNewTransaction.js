import React, { useRef } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Keyboard,
} from "react-native";
import { Action } from "../styles/root";
import { MockList } from "../../mock";
import Listing from "./Listing";
import Input from "./Form/Input";
import { Form } from "@unform/mobile";
import { Scope } from "@unform/core";
import { useTransaction } from "../Contexts/TransactionContext";
import { Hamburger, Money, Wine } from "phosphor-react-native";

export default function RegisterNewTransaction({ setList, setCurrentView }) {
  const formRef = useRef(null);

  const { addTransaction } = useTransaction();

  const icons = [<Hamburger />, <Wine />, <Money />];

  const handleSubmit = (data) => {
    // console.log(data, "data");
    const { nome, amount } = data;
    addTransaction({
      nome,
      amount,
      type: "Saída",
      bank: "flash",
      date: new Date(),
      icon: icons[Math.floor(Math.random() * 3)],
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
      <View>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="nome" label="Nome da transação" />
          <Input
            name="amount"
            label="Valor"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => formRef.current.submitForm()}
          >
            <Text style={styles.submitButtonText}>Send</Text>
          </TouchableOpacity>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    padding: 20,
    backgroundColor: "#d6d4ce",
  },

  logo: {
    width: 120,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
  },

  submitButton: {
    backgroundColor: "#111",
    border: 0,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
  },

  submitButtonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 15,
  },
});
