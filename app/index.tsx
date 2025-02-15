import AnimatedIntro from "@/components/AnimatedIntro";
import BottomLogin from "@/components/BottomLogin";
import IntoBanner from "@/components/IntoBanner";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <IntoBanner />
      <BottomLogin />
    </View>
  );
}
