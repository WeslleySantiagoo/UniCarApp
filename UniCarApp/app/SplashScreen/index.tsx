import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import { useEffect } from "react";

export default function SplashScreen () {
  function redirectTo() {
    return router.replace("/Home");
  }
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => {
      redirectTo();
    }, 2000);
    return () => clearTimeout(timer);
  });
  return (
    <View style={{justifyContent: "center", alignItems: "center", flex: 1, position: "relative"}}>
        <Image source={require("../../assets/images/splash-icon.png")} style={{width: 150, height: 150}} />
        <Text style={{
          color: "#007075",
          fontFamily: "InterBold",
          fontSize: 28
        }}>UniCar</Text>
        <View style={{flexDirection: "row", position:"absolute",bottom: 60}}>
          <Text style={{fontFamily:"Inter", color:"#7a7a7a", fontSize: 18}}>Made by </Text>
          <Text style={{fontFamily:"InterBold", color:"#7a7a7a", fontSize: 18}}>SproutUnit</Text>
        </View>
    </View>
  )
};

