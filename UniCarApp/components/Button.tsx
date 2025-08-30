import { Text, View, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    children?: React.ReactNode;
    label: string;
    style: any;
}

export default function Button({ label, children, style, ...rest }:Props) {
    return (
        <TouchableOpacity style={[styles.container, style]} {...rest}>
            {children && <View>{children}</View>}
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
        gap: 10
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "MontserratBold"
        
    }
})