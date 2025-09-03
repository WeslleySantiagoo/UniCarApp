import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";


export default function Header({ ...rest }: TouchableOpacityProps) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon} {...rest}>
                <MaterialIcons name="close" size={30} color="#585858"/>
            </TouchableOpacity>
            <Text style={styles.text}> Oferecer carona</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: 60,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontFamily: "MontserratBold",
        fontSize: 18,
        color: "#007075"
    },
    icon: {
        position: "absolute",
        left: 30
    }
})