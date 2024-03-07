import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Linking,
  StyleSheet,
} from "react-native";
import react from "react";
import { useRouter } from "expo-router";
import { useState } from "react";
import Colors from "@/constants/Colors";

const Page = () => {
  const [loading, setloading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 90 : 0;

  const openLink = () => {
    Linking.openURL("https://www.whatsapp.com/legal");
  };

  const sendOTP = async () => {};

  const trySignIn = async () => {};

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.description}>
          WhatsApp needs to verify your account. Carrier charges may apply.
        </Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text>Germany</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
    gap: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: Colors.gray,
  },
  list: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
    marginBottom: 10,
  },
});

export default Page;
