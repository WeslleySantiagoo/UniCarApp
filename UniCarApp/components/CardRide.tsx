import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

//Icons
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = TouchableOpacityProps & {
    name: string;
    image: any;
    evaluation: number;
    car: string;
    origin: string;
    time: string;
    price: number;
}

export default function CardRide ({ name,image,evaluation,car,origin,time,price, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.box}>
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
            <View style={{backgroundColor: "#D9D9D9", width: "100%", height: 1}}/>
            <View style={[styles.box, {gap: 10}]}>
                <Text style={[styles.text, styles.time]}>{time}</Text>
                <View>
                    <Text style={[styles.text, {color: "#7A7A7A"}]}>Partida</Text>
                    <Text style={[styles.text, {color:"#007075"}]}>{origin}</Text>
                </View>
                <Text style={[styles.text, styles.price]}>{price.toLocaleString("pt-BR", {style: "currency",currency: "BRL",})}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 200,
        // borderWidth: 1,
        borderRadius: 20,
        // backgroundColor: "#191",
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        alignItems: "center",
        flexDirection: "row",
        // backgroundColor: "pink",
        height:99,
        width: "100%",
        padding: 15,
        gap: 20
    },
    text: {
        fontFamily: "MontserratBold"
    },
    shadowBox: {
        elevation: 8,
    },
    time: {
        fontSize: 18,
        color: "#8E8E8E",
    },
    price: {
        color: "#636363",
        marginLeft: "auto",
        fontSize: 16
    }
})