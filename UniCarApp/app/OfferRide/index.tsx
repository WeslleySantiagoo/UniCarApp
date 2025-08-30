import Header from "@/components/Header";
import TextInputComponent from "@/components/TextInput";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Button from "@/components/Button";
import DateTimePicker from '@react-native-community/datetimepicker';


export default function OfferRide () {
    const router = useRouter();
    const [time, setTime] = useState(new Date());
    const [mode, setMode] = useState<"date" | "time">("time");
    const [show, setShow] = useState(false);
    const [init, setInit] = useState(true);
    
    const onChange = (event: any, selectedDate?: Date) => {
        setShow(false);
        setInit(false)
        if (selectedDate) {
            setTime(selectedDate);
        }
    };
    const showPicker = (pickerMode: "date" | "time") => {
        setMode(pickerMode);
        setShow(true);
    };
    
    const formattedDate = time.toLocaleDateString("pt-BR");
    const formattedTime = time.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
    });
    
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
                                <Text style={styles.title}>Horário e Data de Partida</Text>
                                <TextInputComponent width={"85%"} label={init ? "00:00" : `${formattedTime}`} datetime={true} onPress={() => showPicker("time")}>
                                    <FontAwesome6 name="clock" size={24} color="#5E9C9E"/>
                                </TextInputComponent>
                                <TextInputComponent width={"85%"} label={formattedDate} datetime={true} onPress={() => showPicker("date")}>
                                    <FontAwesome6 name="calendar" size={24} color="#5E9C9E"/>
                                </TextInputComponent>
                                {show && (
                                        <DateTimePicker
                                        value={time}
                                        mode={mode}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChange}
                                        />
                                    )}
                            </View>

                            <View style={{width:"100%", gap:10}}>
                                <Text style={styles.title}>Preço</Text>
                                <TextInputComponent width={"85%"} label={"R$ 00,00"} inputMode="numeric" monetary={true}>
                                    <Entypo name="wallet" size={28} color="#5E9C9E" />
                                </TextInputComponent>
                            </View>

                            <View style={{width:"100%", gap:10}}>
                                <Text style={styles.title}>Vagas Disponíveis</Text>
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