import React from "react";
import { View, StyleSheet, TextInput, TextInputProps } from 'react-native';

type Props = TextInputProps & {
    children: React.ReactNode;
    width?: number | string ;
    label: string;
    
}

export default function TextInputComponent({ children, width, label, ...rest}: Props) {
    const wi = width
    return (
        <View style={[styles.container, {width: wi as any}]} >
            <View style={[{justifyContent:"center", alignItems:"center", width:30, height:30}]}>
                {children}
            </View>
            <TextInput
            style={[styles.input, {...rest}]}
            placeholder={label}
            inputMode='text'
            selectionColor={'rgba(101, 181, 185, 0.25)'}
            selectionHandleColor={'#65B5B9'}
            cursorColor={'#65B5B9'}
            placeholderTextColor={'#65B5B9'}
            scrollEnabled={false}
            {...rest}
            />
        </View>
    )
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