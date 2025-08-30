import React from "react";
// eslint-disable-next-line import/no-duplicates
import { useState } from "react";
import { View, StyleSheet, TextInput, TextInputProps, TouchableOpacityProps, Text, TouchableOpacity } from 'react-native';

type Props = TextInputProps & TouchableOpacityProps & {
    children: React.ReactNode;
    width?: number | string ;
    label: string;
    datetime?: boolean;
    monetary?: boolean;
    
}

export default function TextInputComponent({ children, width, label, datetime, monetary, ...rest}: Props) {
    const wi = width
    const [valor, setValor] = useState("");
    const formatarMoeda = (text: string) => {
        if (monetary) {
            // Remove tudo que não for número
            const numeros = text.replace(/\D/g, "");

            // Transforma em reais: últimos 2 dígitos são centavos
            const numeroFloat = parseFloat(numeros) / 100;

            // Formata como moeda brasileira
            return numeroFloat.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            });
        }
        return text;
    };

    if (!datetime) {
        return (<View style={[styles.container, {width: wi as any}]} >
            <View style={[{justifyContent:"center", alignItems:"center", width:30, height:30}]}>
                {children}
            </View>
            <TextInput
            style={[styles.input, {...rest}]}
            placeholder={label}
            value={valor}
            onChangeText={(valor) => {
                // eslint-disable-next-line no-unused-expressions
                setValor;
                setValor(formatarMoeda(valor))
            }}
            inputMode='text'
            selectionColor={'rgba(101, 181, 185, 0.25)'}
            selectionHandleColor={'#65B5B9'}
            cursorColor={'#65B5B9'}
            placeholderTextColor={'#65B5B9'}
            scrollEnabled={false}
            onBlur={() => setValor(formatarMoeda(valor))}
            {...rest}
            />
        </View>
        )
    } else {
        return (
            <TouchableOpacity style={[styles.container, {width: wi as any}]} {...rest}>
                <View style={[{justifyContent:"center", alignItems:"center", width:30, height:30}]}>
                    {children}
                </View>
                <Text style={styles.input}>{label}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E3FAF9",
        borderRadius: 6,
        flexDirection: "row",
        height: 50,
        justifyContent:"flex-start",
        alignItems:"center",
        paddingLeft: 10
    },
    input: {
    padding: 10,
    fontFamily: "Inter",
    color: "#65B5B9",
    fontSize: 16,
    flex: 1,
    textAlignVertical: "center"
    }
})