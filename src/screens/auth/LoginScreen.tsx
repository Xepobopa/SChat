import React, { useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import tw from "twrnc";

import RegularButton from "../../components/inputs/RegularButton";
import RegularTextInput from "../../components/inputs/RegularTextInput";
import GradientSphere from "../../components/common/GradientSphere";

const { width } = Dimensions.get("window");

const LoginScreen = ({ navigation }: any) => {
  const radius = useSharedValue(width * 1.5);
  const topOff = useSharedValue(-width);
  const bottomOff = useSharedValue(-width);
  const rightOff = useSharedValue(width / 2 - width * 0.5 * 1.5);
  const leftOff = useSharedValue(width / 2 - width * 0.5 * 1.5);
  const textOpacity = useSharedValue(0);

  const topGradientStyle = useAnimatedStyle(() => {
    return {
      width: radius.value,
      height: radius.value,
      borderRadius: radius.value / 2,
      top: topOff.value,
      right: rightOff.value,
    };
  });

  const bottomGradientStyle = useAnimatedStyle(() => {
    return {
      width: radius.value,
      height: radius.value,
      borderRadius: radius.value / 2,
      bottom: bottomOff.value,
      left: leftOff.value,
    };
  });

  useEffect(() => {
    //radius.value = withTiming(width * 1.5, { duration: 3000 });
    //textOpacity.value = withTiming(1, { duration: 3000 });
    // Animate the offsets to their target positions
    topOff.value = withTiming(-width - 80, { duration: 3000 });
    bottomOff.value = withTiming(-width - 80, { duration: 3000 });
    // rightOff.value = withTiming(0, { duration: 3000 });
    // leftOff.value = withTiming(0, { duration: 3000 });
  }, []);

  return (
    <View style={tw`flex-1 items-center justify-center bg-black p-4`}>
      <Text
        style={[
          tw`mb-4 font-bold text-white px-5 w-full text-center h-20`,
          { fontSize: 50 },
          styles.shadow,
        ]}
      >
        Login
      </Text>
      <RegularTextInput placeholder="Enter your ID..." />
      <RegularTextInput
        placeholder="Enter password..."
        additionalStyles={{ marginTop: 12 }}
      />

      <Text
        onPress={() => navigation.navigate("ForgotPassword")}
        style={tw`text-gray-400 text-lg pl-2 py-1 w-full text-right mb-8`}
      >
        Forgot your password?
      </Text>
      <RegularButton
        title="Continue"
        onPress={() => navigation.navigate("Profile")}
      />

      <GradientSphere animatedStyle={topGradientStyle} color="#522d83" />
      <GradientSphere animatedStyle={bottomGradientStyle} color="#0f84a7" />
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    textShadowColor: "#9c9c9c",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 20,
  },
});

export default LoginScreen;
