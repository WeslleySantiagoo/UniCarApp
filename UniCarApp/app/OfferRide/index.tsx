import Header from "@/components/Header";
import TextInputComponent from "@/components/TextInput";
import Button from "@/components/Button";

import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Icons
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function OfferRide () {
    const [showSuccess, setShowSuccess] = useState(false)
    const router = useRouter();
    const [value, setValue] = useState("")
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

    const vacancies = (value: string) => {
        if (parseInt(value, 10) >= 5) {
            return ("4")
        }
        return value;
    }
    
    return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaProvider style={{flex: 1, backgroundColor: "#000"}}>
                    <SafeAreaView style={{backgroundColor: "#000", flex: 1}}>
                            <View  style={{backgroundColor: "#fff", flex: 1}}>
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
                                            <TextInputComponent width={"85%"} label={init ? "Horário" : `${formattedTime}`} datetime={true} onPress={() => showPicker("time")}>
                                                <FontAwesome6 name="clock" size={24} color="#5E9C9E"/>
                                            </TextInputComponent>
                                            <TextInputComponent width={"85%"} label={init ? "Quando?" : formattedDate} datetime={true} onPress={() => showPicker("date")}>
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
                                            <TextInputComponent width={80} label={"0"} inputMode="numeric" maxLength={1} onChangeText={setValue} value={value} onBlur={() => setValue(vacancies(value))}>
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
                                    <Button label="Cadastrar" style={styles.button} onPress={() => setShowSuccess(!showSuccess)}/>
                                </View>
                            {showSuccess && 
                                <View style={styles.disfoque}>
                                    <View style={styles.success}>
                                        <Image source={require("../../assets/images/human-car.png")}/>
                                        <Text style={styles.text}>Carona cadastrada com sucesso!</Text>
                                        <Button label="Voltar para Home" style={[styles.button, {height: 50}]} onPress={() => {
                                            setShowSuccess(!showSuccess)
                                            router.dismiss(1);
                                        }}/>
                                    </View >
                                </View>
                            }
                            </View>
                    </SafeAreaView>
                </SafeAreaProvider> 
            </TouchableWithoutFeedback>
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
    },
    success: {
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        marginVertical: "50%",
        backgroundColor:"#fff",
        position: "absolute",
        width: "80%",
        paddingVertical: 30,
        borderRadius: 30
    },
    disfoque: {
        backgroundColor: "rgba(217, 217, 217, 0.5)",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    text: {
        fontFamily: "MontserratBold",
        color: "#65B5B9",
        fontSize: 26,
        textAlignVertical: "center",
        textAlign:"center",
        paddingHorizontal: 10,
        paddingVertical: 20
    }
})