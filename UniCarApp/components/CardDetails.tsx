import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableOpacityProps,Modal } from "react-native"
import Button from "./Button";
import { useState } from "react";

//Icons
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome6, Fontisto, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
    name: string;
    image: any;
    evaluation: number;
    car: string;
    origin: string;
    destination: string;
    time: string;
    price: number;
}

export default function RideDetails ({ name,image,evaluation,car,origin,destination,time,price, ...rest }: Props) {
    const [show, setShow] = useState(false)
    const [clickable, setClickable] = useState(true)
    const [requisited, setRequisited] = useState(false)
    const click = setTimeout(() => {
        setTimeout(() => {setClickable(true)}, 2000)
        setShow(false)
        }, 4000);
    
    if (clickable) {
        clearTimeout(click)
    }

    return (
        <TouchableOpacity style={styles.container} {...rest} activeOpacity={1}>
            <TouchableOpacity style={styles.box} activeOpacity={1}>
                <Text style={[styles.text, {alignSelf:"center", color:"#007075", fontSize: 18}]}>Detalhes da Carona</Text>
                <View style={styles.row}>
                    <View style={{justifyContent: "center", alignItems: "center", position:"relative", paddingVertical: 10}}>
                        <View style={{borderRadius: 100, overflow: "hidden"}}>
                            <Image source={image} style={{ width: 60, height: 60 }} />
                        </View>
                        <View style={[styles.shadowBox, {
                            position: "absolute", 
                            bottom: 0, 
                            flexDirection: "row", 
                            alignItems:"center",
                            backgroundColor: "#fff",
                            paddingHorizontal: 8,
                            borderRadius: 100,
                            gap: 3
                            }]}>
                            <AntDesign name="star" size={10} color="#FDBE3F"/>
                            <Text style={[styles.text, {color: "#727272"}]}>{evaluation}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.text, {color:"#007075", fontSize: 18}]}>{name}</Text>
                        <Text style={[styles.text, {color:"#7A7A7A"}]}>{car}</Text>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flexDirection:"column", justifyContent:"space-between", marginVertical: 15, alignItems: "center"}}>
                            <View style={{gap:4, justifyContent:"space-between", alignItems: "center"}}>
                                <FontAwesome6 name="circle-dot" size={20} color="#A4DBDE" />
                                <MaterialCommunityIcons name="dots-vertical" size={30} color="#A4DBDE" />
                                <Fontisto name="map-marker-alt" size={20} color="#00C1C9" />
                            </View>
                        </View>
                        <View style={{justifyContent:"space-around", alignItems:"flex-start", width: "80%", gap:5, paddingVertical: 8}}>
                            <Text style={[styles.text, {color: "#00787D", fontSize: 16, paddingLeft: 10}]}>{origin}</Text>
                            <View style={{backgroundColor:"#D9D9D9", height:1, width: "100%"}}/>
                            <Text style={[styles.text, {color: "#00787D", fontSize: 16, paddingLeft: 10}]}>{destination}</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                    <View>
                        <Text style={[styles.text, {color:"#007075", fontSize: 16}]}>Horário</Text>
                        <Text style={[styles.text, {color:"#9C9C9C", fontSize: 16}]}>{time}</Text>
                    </View>
                    <View>
                        <Text style={[styles.text, {color:"#007075", fontSize: 16}]}>Preço</Text>
                        <Text style={[styles.text, {color:"#9C9C9C", fontSize: 16}]}>{price.toLocaleString("pt-BR",{style: "currency",currency: "BRL",})}</Text>
                    </View>
                </View>
                {requisited && <Button label={"Aguardando confimação"} style={[styles.button, {height: 50, backgroundColor:"#ECF6F6"}]} textColor="#539194" activeOpacity={1}/>}
                <Button label={requisited ? "Cancelar" : "Solicitar Carona"} style={[styles.button, {height: 50}, clickable ? null : {backgroundColor: "#ECF6F6"}]} textColor={clickable ? "white" : "#539194"} onPress={() => clickable ? [setShow(true), setRequisited(!requisited), setClickable(false), click] : null}/>
            </TouchableOpacity>
            <Modal
            animationType="fade"
            transparent={true}
            visible={show}>
            {requisited && <View style={styles.notification}>
                <Ionicons name="checkmark-circle" size={28} color="white" />
                <View>
                    <Text style={[styles.text, {color: "white", fontSize: 12}]}>Viagem solicitada com sucesso! </Text>
                    <Text style={[styles.text, {color: "white", fontSize: 12}]}>Aguarde a confirmação do motorista.</Text>
                </View>
            </View>}
            {(!requisited) && <View style={[styles.notification, {backgroundColor: "#CB2B16", justifyContent: "center"}]}>
                <View>
                    <Text style={[styles.text, {color: "white", fontSize: 12}]}>Solicitação cancelada!</Text>
                </View>
            </View>}
            </Modal>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        // backgroundColor: "rgba(255, 0, 0, 1)",
        backgroundColor: "rgba(190, 190, 190, 0.4)",
        width: "100%",
        height: "110%",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: "MontserratBold",
    },
    shadowBox: {
        elevation: 8,
    },
    box: {
        backgroundColor: "#fff",
        borderRadius: 15,
        width: "80%",
        height: "auto",
        justifyContent: "center",
        flexDirection: "column",
        padding: 20,
        gap: 10
    },
    row: {
        alignItems: "center",
        flexDirection: "row",
        // backgroundColor: "pink",
        height:99,
        width: "100%",
        padding: 15,
        gap: 20
    },
    button: {
        width:"100%",
        height:60,
        padding:10,
        backgroundColor: "#058B91",
        alignSelf: "center"
    },
    notification: {
        width: "90%",
        height: 50,
        flexDirection: "row",
        backgroundColor: "#16CB58",
        alignSelf: "center",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 10,
        gap: 10,
        paddingLeft: 20,
        marginTop: 20
    }
})