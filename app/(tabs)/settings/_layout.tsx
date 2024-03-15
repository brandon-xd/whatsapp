import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import { View, Text } from "react-native";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Settings",
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.background },
          headerSearchBarOptions: { placeholder: "Search settings" },
        }}
      />
    </Stack>
  );
};

export default Layout;
