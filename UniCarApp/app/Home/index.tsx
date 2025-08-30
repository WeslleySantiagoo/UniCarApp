import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Home () {
  const router = useRouter()

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Button label={`Oferecer \ncarona`} activeOpacity={0.8} style={styles.button} onPress={() => router.push("/OfferRide")}>
                    <MaterialIcons name="directions-car-filled" size={30} color="white" />
                </Button>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container:{
        position: "relative",
        width: "100%",
        height: "100%",
        padding: 20,
        backgroundColor: "#3678"
    },
    button: {
        position: "absolute",
        right: 25,
        bottom: 25,
        width:150,
        height: 70,
        backgroundColor: "#045B5F",
        borderRadius: 10
    },
    text: {
        color: "#fff"
        // fontFamily: ""
    }
})
