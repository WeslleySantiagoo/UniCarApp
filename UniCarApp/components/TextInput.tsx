import { useState } from "react";
import { View, StyleSheet, TextInput, TextInputProps, TouchableOpacityProps, Text, TouchableOpacity } from 'react-native';

type Props = TextInputProps & TouchableOpacityProps & {
    children?: React.ReactNode;
    width?: number | string ;
    label: string;
    datetime?: boolean;
    monetary?: boolean;
    backgroundColor?: string;
    txtColor?: string;
}

export default function TextInputComponent({ children, width, label, datetime, monetary, backgroundColor, txtColor, ...rest}: Props) {
    const wi = width
    const [valor, setValor] = useState("");

    const bgColor = backgroundColor ? backgroundColor : "#E3FAF9";
    const textColor = txtColor ? txtColor : "#65B5B9";

    if (!datetime) {
        return (<View style={[styles.container, {width: wi as any, backgroundColor:bgColor}]} >
            {children && (
            <View style={[{justifyContent:"center", alignItems:"center", width:30, height:30}]}>
                {children}
            </View>
            )}
            <TextInput
            style={[styles.input, {...rest}, {color: textColor}]}
            placeholder={label}
            value={valor}
            onChangeText={(valor) => {
                setValor(valor)
            }}
            inputMode='text'
            selectionColor={'rgba(101, 181, 185, 0.25)'}
            selectionHandleColor={'#65B5B9'}
            cursorColor={'#65B5B9'}
            placeholderTextColor={textColor}
            scrollEnabled={false}
            onBlur={() => setValor(valor)}
            {...rest}
            />
        </View>
        )
    } else {
        return (
            <TouchableOpacity style={[styles.container, {width: wi as any, backgroundColor: bgColor}]} {...rest}>
                {children && (
                <View style={[{justifyContent:"center", alignItems:"center", width:30, height:30}]}>
                    {children}
                </View>
                )}
                <Text style={[styles.input, {color: textColor}]}>{label}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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
    fontSize: 16,
    flex: 1,
    textAlignVertical: "center",
    }
})