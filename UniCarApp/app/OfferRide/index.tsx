import Header from "@/components/Header";
import TextInputComponent from "@/components/TextInput";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Button from "@/components/Button";


export default function OfferRide () {
    const router = useRouter();
    return (
        <SafeAreaProvider style={{flex: 1, backgroundColor: "#000"}}>
            <SafeAreaView style={{backgroundColor: "#000", flex: 1}}>
                <View style={{backgroundColor: "#fff", flex: 1}}>
                    <Header onPress={() => router.dismiss(1)}/>
                    <View style={styles.container}>
                        <View style={{justifyContent:"flex-start", gap:20}}>
                            <View style={{width:"100%", gap:10}}>
                                <Text style={styles.title}>Partida</Text>
                                <TextInputComponent width={"85%"} label={"De onde você vai sair?"}>
                                    <Entypo name="magnifying-glass" size={30} color="#5E9C9E" />
                                </TextInputComponent>
                            </View>

                            <View style={{width:"100%", gap:10}}>
                                <Text style={styles.title}>Destino</Text>
                                <TextInputComponent width={"85%"} label={"Para onde você vai?"}>
                                    <Entypo name="magnifying-glass" size={30} color="#5E9C9E" />
                                </TextInputComponent>
                            </View>

                            <View style={{width:"100%", gap:10}}>
                                <Text style={styles.title}>Horário de Partido</Text>
                                <TextInputComponent width={"85%"} label={"__ : __"} inputMode="numeric">
                                    <FontAwesome6 name="clock" size={24} color="#5E9C9E"/>
                                </TextInputComponent>
                            </View>

                            <View style={{width:"100%", gap:10}}>
                                <Text style={styles.title}>Preço</Text>
                                <TextInputComponent width={"85%"} label={"R$ 00,00"} inputMode="numeric">
                                    <Entypo name="wallet" size={28} color="#5E9C9E" />
                                </TextInputComponent>
                            </View>

                            <View style={{width:"100%", gap:10}}>
                                <Text style={styles.title}>veículo</Text>
                                <TextInputComponent width={80} label={"1"} inputMode="numeric" maxLength={1}>
                                    <FontAwesome name="user" size={24} color="#5E9C9E" />
                                </TextInputComponent>
                            </View>

                            <View style={{width:"100%", gap:10}}>
                                <Text style={styles.title}>veículo</Text>
                                <TextInputComponent width={"85%"} label={"Selecione o veículo"}>
                                    <MaterialIcons name="directions-car-filled" size={30} color="#5E9C9E" />
                                </TextInputComponent>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.container, {flex: 1}]}>
                        <Button label="Cadastrar" style={styles.button}/>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems:"center",
    },
    title: {
        fontFamily: "MontserratBold",
        fontSize: 24,
        color: "#007075",
    },
    button: {
        width:"85%",
        height:60,
        padding:10,
        backgroundColor: "#058B91"
    }
})