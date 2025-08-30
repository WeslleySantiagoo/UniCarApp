import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Home () {
  const router = useRouter()

    return (
        <SafeAreaProvider style={{backgroundColor: "#000"}}>
            <SafeAreaView style={{backgroundColor: "#000", flex: 1}}>
                <View style={styles.backgound}>
                    <View style={styles.container}>

                    </View>
                    <Button label={`Oferecer \ncarona`} activeOpacity={0.8} style={styles.button} onPress={() => router.push("/OfferRide")}>
                        <MaterialIcons name="directions-car-filled" size={30} color="white" />
                    </Button>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    backgound:{
        flex: 1,
        position: "relative",
        backgroundColor: "#007075", 
    },
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: "50%",
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
