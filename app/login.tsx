import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Page = () => {
  const { type } = useLocalSearchParams<{ type: string }>();
  const [loading, setLoading] = React.useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={1}
      style={styles.container}
    >
      {loading && (
        <View style={defaultStyles.loadingOverlay}>
          <ActivityIndicator size="large" color={colors.textprimary} />
        </View>
      )}
      <Image
        source={require("../assets/images/icon.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>
        {type === "login" ? "Welcome Back" : "Get Started"}
      </Text>
      <View style={{ marginBottom: 30 }}>
        <TextInput
          placeholder="Email"
          style={styles.inputField}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          textContentType="emailAddress"
        />
        <TextInput
          placeholder="Mobile Number"
          style={styles.inputField}
          keyboardType="phone-pad"
          autoCapitalize="none"
          autoComplete="tel"
          autoCorrect={false}
          textContentType="telephoneNumber"
        />
        <Link
          href={{
            pathname: "/otp",
            params: { type },
          }}
          asChild
          style={[defaultStyles.btn, styles.btnDark]}
        >
          <TouchableOpacity style={[defaultStyles.btn, styles.btnDark]}>
            <Ionicons
              name="log-in"
              style={styles.btnIcon}
              size={24}
              color={colors.textprimary}
            />
            <Text style={styles.buttonDarkText}>Log in</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginVertical: 80,
    objectFit: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primary,
    borderRadius: 12,
    padding: 10,
    backgroundColor: colors.textprimary,
  },
  btnIcon: {
    paddingRight: 10,
  },
  btnDark: {
    backgroundColor: colors.accent,
    marginBottom: 10,
    marginTop: 20,
  },

  buttonDarkText: {
    fontSize: 16,
    color: colors.textprimary,
  },
});
