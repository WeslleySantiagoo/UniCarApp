import Header from "@/components/Header";
import TextInputComponent from "@/components/TextInput";
import Button from "@/components/Button";

import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Icons
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
const API_URL = "https://unicar-w56x.onrender.com"

export default function OfferRide () {
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    const router = useRouter();
    const [value, setValue] = useState("")
    const [priceField, setPriceField] = useState("")
    const [price, setPrice] = useState<any>()
    const [time, setTime] = useState(new Date());
    const [mode, setMode] = useState<"date" | "time">("time");
    const [show, setShow] = useState(false);
    const [init, setInit] = useState(true);
    const [respostaApi, setRespostaApi] = useState("")
    let resposta;

    const formatarMoeda = (text: string) => {
        // Remove tudo que não for número
        const numeros = text.replace(/\D/g, "");

        // Transforma em reais: últimos 2 dígitos são centavos
        const numeroFloat = parseFloat(numeros)/100;

        // Formata como moeda brasileira
        const saida = numeroFloat.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        return { saida, numeroFloat }
    };
    const handleChangeText = (text: string) => {
        const {saida, numeroFloat } = formatarMoeda(text)
        setPriceField(saida)
        setPrice(numeroFloat * 10)
        setData({...data, price: price})
    }

    const [data, setData] = useState({
        origin: "",
        destination: "",
        date: "",
        availableSeats: 0,
        price: 0,
        userId: 1,
    })
    const sendData = async () => {
    console.log("Bem Antes")
    const response = await fetch(`${API_URL}/ride/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        
    console.log("Antes")
    resposta = await response.json()
    setRespostaApi(resposta.message)
    console.log("Depois", resposta)
    if (resposta.error) {
        console.log("AAAAAAAAAAAAAa")
        setShowError(true)
    } else {
        console.log("BBBBBBBBBBBBBB")
        setShowSuccess(true)
    }
    console.log("CCCCCCCCCCCC")
    }
    
    const onChange = (event: any, selectedDate?: Date) => {
        setShow(false);
        setInit(false)
        if (selectedDate) {
            setTime(selectedDate);

            const year = selectedDate.getFullYear();
            const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
            const day = String(selectedDate.getDate()).padStart(2, '0');
            const hour = String(selectedDate.getHours()).padStart(2, '0');
            const minute = String(selectedDate.getMinutes()).padStart(2, '0');
            const second = String(selectedDate.getSeconds()).padStart(2, '0');
            const localISOString = `${year}-${month}-${day}T${hour}:${minute}:${second}.000Z`;

            setData({...data, date: localISOString});
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
        const seats = parseInt(value, 10)
        if (seats >= 5) {
            setData({...data, availableSeats: 4})
            return (setValue("4"))
        }
        setData({...data, availableSeats: seats})
        return value;
    }
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaProvider>
                <SafeAreaView  style={styles.container}>
                    <ScrollView style={styles.scrollview}>
                        <Header onPress={() => router.dismiss(1)}/>
                        <View style={styles.box} pointerEvents="box-only">
                            <Text style={{fontFamily: "Inter", textAlign: "justify", color: "red"}}>BUG NÃO RESOLVIDO: Para ScrollView funcionar, deve arrastar clicando sobre o TextInput.</Text>
                            <View style={styles.field}>
                                <Text style={styles.title}>Partida</Text>
                                <TextInputComponent width={"100%"} label={"De onde você vai sair?"} value={data.origin} onChangeText={(text) => setData({...data, origin: text})}>
                                    <Entypo name="magnifying-glass" size={30} color="#5E9C9E" />
                                </TextInputComponent>
                            </View>

                            <View style={{width:"100%", gap:10}}>
                                <Text style={styles.title}>Destino</Text>
                                <TextInputComponent width={"100%"} label={"Para onde você vai?"} value={data.destination} onChangeText={(text) => setData({...data, destination: text})}>
                                    <Entypo name="magnifying-glass" size={30} color="#5E9C9E" />
                                </TextInputComponent>
                            </View>

                            <View style={{width:"100%", gap:10}}>
                                <Text style={styles.title}>Horário e Data de Partida</Text>
                                <TextInputComponent width={"100%"} label={init ? "Horário" : `${formattedTime}`} datetime={true} onPress={() => showPicker("time")}>
                                    <FontAwesome6 name="clock" size={24} color="#5E9C9E"/>
                                </TextInputComponent>
                                <TextInputComponent width={"100%"} label={init ? "Quando?" : formattedDate} datetime={true} onPress={() => showPicker("date")}>
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
                                <TextInputComponent width={"100%"} label={"R$ 00,00"} inputMode="numeric" value={priceField === "" ? "RS 00,00":priceField} onChangeText={handleChangeText}>
                                    <Entypo name="wallet" size={28} color="#5E9C9E" />
                                </TextInputComponent>
                            </View>

                            <View style={{width:"100%", gap:10}}>
                                <Text style={styles.title}>Vagas Disponíveis</Text>
                                <TextInputComponent width={80} label={"0"} inputMode="numeric" maxLength={1} value={value} onChangeText={setValue} onBlur={() => vacancies(value)}>
                                    <FontAwesome name="user" size={24} color="#5E9C9E" />
                                </TextInputComponent>
                            </View>

                            <View style={{width:"100%", gap:10}}>
                                <Text style={styles.title}>Veículo</Text>
                                <TextInputComponent width={"100%"} label={"Selecione o veículo"}>
                                    <MaterialIcons name="directions-car-filled" size={30} color="#5E9C9E" />
                                </TextInputComponent>
                            </View>
                            <Text style={{fontFamily: "Inter", textAlign: "center", color: "red"}}>Ao clicar no botão, aguarde uma resposta do app.</Text>
                            <Button label="Cadastrar" style={styles.button} onPress={() => [sendData(), console.log("Botão pressionado")]}/>
                        </View>
                        {showSuccess && 
                            <View style={styles.disfoque}>
                                <View style={styles.success}>
                                    <Image source={require("../../assets/images/human-car.png")}/>
                                    <Text style={styles.text}>Carona cadastrada com sucesso!</Text>
                                    <Button label="Voltar para Home" style={[styles.button, {height: 50, width:"85%"}]} onPress={() => {
                                        setShowSuccess(!showSuccess)
                                        router.dismiss(1);
                                    }}/>
                                </View >
                            </View>
                        }
                        {showError && 
                            <View style={styles.disfoque}>
                                <View style={styles.success}>
                                    <Text style={[styles.text, {fontFamily:"Inter", fontSize:12, textAlign:"center",marginHorizontal:10}]}>{respostaApi}</Text>
                                    <Button label="Tentar novamente" style={[styles.button, {height: 50, width:"85%"}]} onPress={() => {
                                        setShowError(!showError);
                                    }}/>
                                </View >
                            </View>
                        }
                    </ScrollView>
                </SafeAreaView>
            </SafeAreaProvider>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    field: {
        width:"100%",
        gap:10
    },
    box: {
        width: "80%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        gap: 20,
        paddingBottom: 50
    },
    scrollview: {
        flex:1,
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
    },
    container: {
        justifyContent:"center",
        alignItems:"center",
        flex: 1,
        width: "100%",
        height: "100%"
    },
    title: {
        fontFamily: "MontserratBold",
        fontSize: 24,
        color: "#007075",
    },
    button: {
        width:"100%",
        height:60,
        padding:10,
        backgroundColor: "#058B91"
    },
    success: {
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        width: "80%",
        paddingVertical: 30,
        borderRadius: 30
    },
    disfoque: {
        backgroundColor: "rgba(217, 217, 217, 0.5)",
        justifyContent: "center",
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
        paddingVertical: 20,
    }
})