import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";

const BottomLogin = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      <Link
        href={{
          pathname: "/login",
          params: { type: "register" },
        }}
        asChild
        style={[defaultStyles.btn, styles.btnLight]}
      >
        <TouchableOpacity style={[defaultStyles.btn, styles.btnLight]}>
          <Ionicons
            name="arrow-forward-sharp"
            style={styles.btnIcon}
            size={24}
            color="black"
          />
          <Text style={styles.buttonLightText}>Sign up</Text>
        </TouchableOpacity>
      </Link>
      <Link
        href={{
          pathname: "/login",
          params: { type: "login" },
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
      <Text style={[styles.outlineText, { marginTop: 10, marginBottom: 10 }]}>
        Link Account
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    backgroundColor: "#000",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  btnIcon: {
    paddingRight: 10,
  },
  btnLight: {
    backgroundColor: colors.textprimary,
    marginBottom: 10,
    marginTop: 10,
  },

  buttonLightText: {
    fontSize: 16,
  },
  btnDark: {
    backgroundColor: colors.primary,
    marginBottom: 10,
  },

  buttonDarkText: {
    fontSize: 16,
    color: colors.textprimary,
  },
  btnOutline: {
    borderWidth: 3,
    borderColor: colors.accent,
  },
  outlineText: {
    color: colors.accent,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default BottomLogin;
