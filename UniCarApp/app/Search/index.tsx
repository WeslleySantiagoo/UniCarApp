import { View, StyleSheet, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import CardRide from '@/components/CardRide';
import CardDetails from '@/components/CardDetails';
import { getCaronas, Carona as ApiRide } from '../../services/caronaService';
import { getUserById } from '../../services/userService';

// Icons
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Entypo, FontAwesome6 } from '@expo/vector-icons';


type Ride = {
  id: number;
  name: string;
  image: string;
  car: string;
  evaluation: number;
  origin: string;
  destination: string;
  price: number;
  time: string;
};

export default function Searches () {

  const router = useRouter()
  const [selectedRide, setSelectedRide] = useState<Ride | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [rides, setRides] = useState<Ride[]>([]); 

  useEffect(() => {
    const fetchAndFormatRides = async () => {
      try {
        const apiData = await getCaronas();
        const formattedRides = await Promise.all(
          apiData.map(async (apiRide: ApiRide) => {
            let userName = "Nome não encontrado";
            let userPrice = 0;
            try {
              const user = await getUserById(apiRide.userId);
              userName = user.name;
              userPrice = apiRide.price ?? 0;
            } catch {}
            const dateObj = new Date(apiRide.date);
            return {
              id: apiRide.id,
              name: userName,
              image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 99) + 1}.jpg`,
              car: "Honda Civic - static",
              evaluation: 4.5,
              origin: apiRide.origin,
              destination: apiRide.destination,
              price: userPrice,
              time: dateObj.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
              date: dateObj.toLocaleDateString("pt-BR"),
            };
          })
        );
        setRides(formattedRides);

      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };
    fetchAndFormatRides();
  }, []);

  const renderRideItem = ({ item }: any) => (
    <CardRide 
      name={item.name}
      image={{ uri: item.image }}
      car={item.car}
      evaluation={item.evaluation}
      origin={item.origin}
      price={item.price}
      time={item.time}
      date={item.date}
      onPress={() => {
        setSelectedRide(item);
        setShowDetails(true);
      }}
    />
  );
  const Header = () => (
    <View>
    </View>
  );

  const Footer = () => (
    <View style={{ padding: 16, alignItems: 'center', justifyContent:"center"}}>
      <Text style={{ color: '#999', textAlign:"center"}}>
        © 2025 UniCar - Todos os direitos reservados à SproutUnit
      </Text>
    </View>
  );

  return (
    <SafeAreaProvider>
        <SafeAreaView style={[styles.container, {backgroundColor: "#000"}]}>
          <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={[styles.container, {width: "100%"}]}>
          <View style={[styles.container, {width: "87%", paddingTop: 20}]}>
                <View style={styles.searchbar}>
                    <TouchableOpacity  style={styles.icon} onPress={() => router.dismiss(1)}>
                        <Ionicons name="chevron-back" size={24} color="#8E8E8E" />
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <Text
                            numberOfLines={1} ellipsizeMode="tail" style={[styles.text]}>
                            Shopping Recife
                        </Text>

                        <FontAwesome6 name="arrow-right" size={18} color="#007075" style={styles.icon} />

                        <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.text]}>
                            Reitoria, UFRPE
                        </Text>

                        <Entypo name="dot-single" size={18} color="#8E8E8E"/>

                        <Text numberOfLines={1} style={[styles.metaText, {fontFamily:"MontserratBold"}]}>Hoje</Text>
                        </View>
                    <FontAwesome name="search" size={20} color="#8E8E8E" style={{paddingLeft:10}}/>
                </View>
                <Text style={styles.title}>Caronas Disponíveis</Text>
                <FlatList
                  scrollEnabled={false}
                  data={rides}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={renderRideItem}
                  ListHeaderComponent={Header}
                  ListFooterComponent={Footer}
                  contentContainerStyle={{ padding: 16 }}
                  ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                />
          </View>
          </View>
          </ScrollView>
          {showDetails && selectedRide && (
            <CardDetails 
              name={selectedRide.name}
              image={{ uri: selectedRide.image }}
              car={selectedRide.car}
              evaluation={selectedRide.evaluation}
              origin={selectedRide.origin}
              destination={selectedRide.destination}
              price={selectedRide.price}
              time={selectedRide.time}
              onPress={() => setShowDetails(false)}
            />
          )}
        </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    justifyContent:"flex-start",
    alignItems:"center",
    backgroundColor: "#FFF",
    gap: 10
  },
  row: {
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 1,
    alignItems: "center",
  },
  icon: {
    marginRight: 2,
    flexShrink: 0,
  },
  text: {
      color: "#007075",
      fontFamily: "MontserratBold",
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      minWidth: 0,
    },
    metaText: {
      color: "#8E8E8E",
    },
  searchbar: {
    flexDirection: "row",
    borderRadius: 10,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: "#d9d9d9"
    },
  title: {
    fontFamily: "MontserratBold",
    color: "#007075",
    fontSize: 20,
    alignSelf: "baseline",
    marginVertical: 20
    }
});