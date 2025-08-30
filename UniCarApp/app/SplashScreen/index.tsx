import { useRouter } from "expo-router";
import { Image, View } from "react-native";
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
    <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
        <Image source={require("../../assets/images/splash-icon.png")} style={{width: 150, height: 150}} />
    </View>
  )
};

