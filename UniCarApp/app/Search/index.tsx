import { View, StyleSheet, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

import CardRide from '@/components/CardRide';
import CardDetails from '@/components/CardDetails';

// Icons
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Entypo, FontAwesome6 } from '@expo/vector-icons';

const rideData = {
rides: [
  {
    id: 1,
    name: "Pedro Morais",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    car: "Honda Civic",
    evaluation: 4.8,
    origin: "Shopping Recife",
    destination: "Reitoria, UFRPE",
    price: 10.00,
    time: "10:30"
  },
  {
    id: 2,
    name: "Ana Silva",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    car: "Fiat Uno",
    evaluation: 4.5,
    origin: "Praça do Derby",
    destination: "Boa Viagem",
    price: 8.50,
    time: "14:15"
  },
  {
    id: 3,
    name: "Carlos Santos",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    car: "Volkswagen Gol",
    evaluation: 4.9,
    origin: "Casa Forte",
    destination: "Shopping Tacaruna",
    price: 12.00,
    time: "09:45"
  },
  {
    id: 4,
    name: "Marina Costa",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    car: "Chevrolet Onix",
    evaluation: 4.7,
    origin: "Pina",
    destination: "Cidade Universitária",
    price: 9.00,
    time: "16:20"
  },
  {
    id: 5,
    name: "João Pereira",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    car: "Toyota Corolla",
    evaluation: 4.6,
    origin: "Boa Vista",
    destination: "Setúbal",
    price: 15.00,
    time: "11:10"
  },
  {
    id: 6,
    name: "Fernanda Lima",
    image: "https://randomuser.me/api/portraits/women/78.jpg",
    car: "Renault Sandero",
    evaluation: 4.3,
    origin: "Madalena",
    destination: "Espinheiro",
    price: 7.50,
    time: "13:45"
  },
  {
    id: 7,
    name: "Ricardo Alves",
    image: "https://randomuser.me/api/portraits/men/89.jpg",
    car: "Hyundai HB20",
    evaluation: 4.8,
    origin: "Afogados",
    destination: "Imbiribeira",
    price: 11.00,
    time: "08:30"
  },
  {
    id: 8,
    name: "Juliana Martins",
    image: "https://randomuser.me/api/portraits/women/91.jpg",
    car: "Ford Ka",
    evaluation: 4.4,
    origin: "Parnamirim",
    destination: "Torreão",
    price: 6.50,
    time: "17:00"
  },
  {
    id: 9,
    name: "Bruno Oliveira",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    car: "Jeep Renegade",
    evaluation: 4.9,
    origin: "Cordeiro",
    destination: "Prado",
    price: 13.50,
    time: "10:00"
  },
  {
    id: 10,
    name: "Patrícia Souza",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    car: "Nissan March",
    evaluation: 4.2,
    origin: "Graças",
    destination: "Derby",
    price: 8.00,
    time: "15:30"
  },
  {
    id: 11,
    name: "Lucas Rodrigues",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    car: "Fiat Mobi",
    evaluation: 4.7,
    origin: "Santo Amaro",
    destination: "São José",
    price: 9.50,
    time: "12:15"
  },
  {
    id: 12,
    name: "Camila Ferreira",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    car: "Volkswagen Polo",
    evaluation: 4.5,
    origin: "Várzea",
    destination: "Mustardinha",
    price: 10.50,
    time: "14:45"
  },
  {
    id: 13,
    name: "Diego Costa",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    car: "Chevrolet Prisma",
    evaluation: 4.8,
    origin: "Ipsep",
    destination: "Barro",
    price: 12.50,
    time: "09:20"
  },
  {
    id: 14,
    name: "Amanda Santos",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
    car: "Toyota Etios",
    evaluation: 4.6,
    origin: "Totó",
    destination: "Jaqueira",
    price: 11.50,
    time: "16:10"
  },
  {
    id: 15,
    name: "Rafael Silva",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    car: "Honda Fit",
    evaluation: 4.9,
    origin: "Caxangá",
    destination: "Cordeiro",
    price: 14.00,
    time: "08:45"
  },
  {
    id: 16,
    name: "Tatiane Almeida",
    image: "https://randomuser.me/api/portraits/women/99.jpg",
    car: "Renault Logan",
    evaluation: 4.3,
    origin: "Campo Grande",
    destination: "Arruda",
    price: 7.00,
    time: "13:20"
  },
  {
    id: 17,
    name: "Marcos Vinicius",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    car: "Ford EcoSport",
    evaluation: 4.7,
    origin: "Casa Amarela",
    destination: "Norte Shopping",
    price: 16.00,
    time: "10:50"
  },
  {
    id: 18,
    name: "Vanessa Lima",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    car: "Hyundai Creta",
    evaluation: 4.4,
    origin: "Monteiro",
    destination: "Curado",
    price: 18.00,
    time: "15:15"
  },
  {
    id: 19,
    name: "Thiago Pereira",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    car: "Jeep Compass",
    evaluation: 4.8,
    origin: "San Martin",
    destination: "Prazeres",
    price: 20.00,
    time: "11:40"
  },
  {
    id: 20,
    name: "Carolina Oliveira",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    car: "Nissan Versa",
    evaluation: 4.5,
    origin: "Alto do Mandu",
    destination: "Peixinhos",
    price: 9.00,
    time: "17:30"
  }
]
}
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

  const renderRideItem = ({ item }: any) => (
    <CardRide 
      name={item.name}
      image={{ uri: item.image }}
      car={item.car}
      evaluation={item.evaluation}
      origin={item.origin}
      price={item.price}
      time={item.time}
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
                  data={rideData.rides}
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