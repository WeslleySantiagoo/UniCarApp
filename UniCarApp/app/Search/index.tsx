import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Entypo, FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Searches () {
    const router = useRouter()
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <View style={[styles.container, {width: "80%"}]}>
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
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"flex-start",
    alignItems:"center",
    backgroundColor: "#FFF",
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
        alignSelf: "baseline"
    }

});