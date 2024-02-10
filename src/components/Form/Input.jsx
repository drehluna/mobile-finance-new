import React, { useRef, useEffect, useState } from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import { useField } from "@unform/core";

function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = "", error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "_lastNativeText",
      getValue(ref) {
        console.log(inputRef.current.value, "ref2");
        return inputRef.current.value || "88";
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: "" });
        ref._lastNativeText = "";
      },
    });
  }, [fieldName, registerField]);

  const handleChange = (test) => {
    setText(test.nativeEvent.text);
    console.log(text);
  };

  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        style={styles.input}
        defaultValue={defaultValue}
        onChangeText={(text) => (inputRef.current.value = text)}
        ref={inputRef}
        {...rest}
      />
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
  },

  input: {
    marginBottom: 15,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#ddd",
    fontSize: 15,
    color: "#444",
  },
});

export default Input;
