import { useRouter } from "expo-router";
import { useState } from "react";

import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Button from "@/components/Button";
import TextInputComponent from "@/components/TextInput";

//Icons
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';

function SearchConteiner() {
    const router = useRouter()
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [time, setTime] = useState(new(Date));
    const [show, setShow] = useState(false);
    const [init, setInit] = useState(true);
    const formattedDate = time.toLocaleDateString("pt-BR");
    
    const handleSearch = () => {
        if (((origin && destination) !== "") && (init !== true)) {
            router.push("/Search")
        }
    }

    const onChange = (event: any, selectedDate?: Date) => {
        setShow(false);
        if (selectedDate) {
            setInit(false)
            setTime(selectedDate);
            handleSearch()
        }
    };


    const showPicker = () => {
        setShow(true);
    };
    return (
        <View style={styles.containerSearch}>
            <View style={{flexDirection:"row"}}>
                <View style={{flexDirection:"column", justifyContent:"space-between", marginVertical: 15, alignItems: "center"}}>
                    <View style={{gap:4, justifyContent:"space-between", alignItems: "center"}}>
                        <FontAwesome6 name="circle-dot" size={20} color="#A4DBDE" />
                        <MaterialCommunityIcons name="dots-vertical" size={30} color="#A4DBDE" />
                        <Fontisto name="map-marker-alt" size={20} color="#00C1C9" />
                    </View>
                    <FontAwesome6 name="calendar" size={24} color="#A4DBDE"/>
                </View>
                <View style={{justifyContent:"center", width: "80%", gap:5}}>
                    <TextInputComponent 
                    width={"100%"} 
                    label={"Partida"} 
                    backgroundColor="transparent" 
                    txtColor="#8EAFB1"
                    onChangeText={setOrigin}
                    value={origin}
                    returnKeyType="done"
                    onSubmitEditing={() => {handleSearch()}}/>
                    <View style={{backgroundColor:"#d7d7d7", height:1, marginHorizontal: 15}}/>
                    <TextInputComponent 
                    width={"100%"} 
                    label={"Destino"} 
                    backgroundColor="transparent" 
                    txtColor="#8EAFB1"
                    onChangeText={setDestination}
                    value={destination}
                    returnKeyType="done"
                    onSubmitEditing={() => {handleSearch()}}/>
                    <TextInputComponent 
                        width={"100%"} 
                        backgroundColor="transparent"  
                        txtColor="#8EAFB1" 
                        label={init ? "Quando?" : formattedDate} 
                        datetime={true}
                        onPress={() => showPicker()}/>
                    {show && (
                            <DateTimePicker
                            value={time}
                            mode={"date"}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                            />
                        )}
                </View>
            </View>
        </View>
    )
}

export default function Home () {
  const router = useRouter()
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaProvider>
                <SafeAreaView style={[{backgroundColor: "#000", flex: 1}]}>
                    <View style={styles.backgound}>
                        <View style={styles.container}/>
                        <Button label={`Oferecer \ncarona`} activeOpacity={0.8} style={styles.button} onPress={() => router.push("/OfferRide")}>
                            <MaterialIcons name="directions-car-filled" size={30} color="white" />
                        </Button>
                        <SearchConteiner/>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </TouchableWithoutFeedback>
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
        justifyContent:"center",
        backgroundColor: "#f1f1f1",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: "50%",
    },
    containerSearch: {
        position: "absolute",
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#fff",
        borderRadius: 30,
        top: 130,
        width: "80%",
        height: "25%"
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
})
