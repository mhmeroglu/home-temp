import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/AppTextInput";
import { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    interface UserData {
        email: string;
        password: string;
    }

    interface UsersData {
        users: UserData[];
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [key, setKey] = useState("");

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match");
            return;
        }

        if (key !== "AAAA") {
            Alert.alert("Error", "Invalid key");
            return;
        }
        const newUser = {
            email: email,
            password: password,
        };

        try {
            const jsonValue = await AsyncStorage.getItem("usersData");
            let usersData: UsersData = jsonValue ? JSON.parse(jsonValue) : { users: [] };
            // Kontrol etmek için aynı e-posta adresine sahip kullanıcıları filtrele
            const existingUser = usersData.users.find(
                (user) => {
                    return user.email === email;
                }
            );

            if (existingUser) {
                Alert.alert("Error", "This email is already registered");
                return;
            }

            usersData.users.push(newUser);
            await AsyncStorage.setItem("usersData", JSON.stringify(usersData));
            Alert.alert("Success", "User registered successfully");
        } catch (error) {
            Alert.alert("Error", "An error occurred while saving the data");
            return;
        }

        navigate("Home");
    };

    return (
      <SafeAreaView>
        <View
            style={{
              padding: Spacing * 2,
            }}
        >
          <View
              style={{
                alignItems: "center",
              }}
          >
            <Text
                style={{
                  fontSize: FontSize.xLarge,
                  color: Colors.primary,
                  fontFamily: Font["poppins-bold"],
                  marginVertical: Spacing * 3,
                }}
            >
              Create account
            </Text>
            <Text
                style={{
                  fontFamily: Font["poppins-regular"],
                  fontSize: FontSize.small,
                  maxWidth: "80%",
                  textAlign: "center",
                }}
            >
                For affordable and comfortable temperature experience.
            </Text>
          </View>
          <View
              style={{
                marginVertical: Spacing * 3,
              }}
          >
            <AppTextInput
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
            />
            <AppTextInput
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
            />
            <AppTextInput
                secureTextEntry={true}
                placeholder="Confirm Password"
                onChangeText={(text) => setConfirmPassword(text)}
            />
            <AppTextInput
                placeholder="Key"
                onChangeText={(text) => setKey(text)}
            />
          </View>

          <TouchableOpacity
              onPress={handleSignUp}
              style={{
                padding: Spacing * 2,
                backgroundColor: Colors.primary,
                marginVertical: Spacing * 1,
                borderRadius: Spacing,
                shadowColor: Colors.primary,
                shadowOffset: {
                  width: 0,
                  height: Spacing,
                },
                shadowOpacity: 0.3,
                shadowRadius: Spacing,
              }}
          >
            <Text
                style={{
                  fontFamily: Font["poppins-bold"],
                  color: Colors.onPrimary,
                  textAlign: "center",
                  fontSize: FontSize.large,
                }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => navigate("Login")}
              style={{
                padding: Spacing,
              }}
          >
            <Text
                style={{
                  fontFamily: Font["poppins-semiBold"],
                  color: Colors.text,
                  textAlign: "center",
                  fontSize: FontSize.small,
                }}
            >
              Already have an account
            </Text>
          </TouchableOpacity>

          <View
              style={{
                marginVertical: Spacing * 3,
              }}
          >
            <Text
                style={{
                  fontFamily: Font["poppins-semiBold"],
                  color: Colors.primary,
                  textAlign: "center",
                  fontSize: FontSize.small,
                }}
            >
              Or continue with
            </Text>

            <View
                style={{
                  marginTop: Spacing,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
            >
              <TouchableOpacity
                  style={{
                    padding: Spacing,
                    backgroundColor: Colors.gray,
                    borderRadius: Spacing / 2,
                    marginHorizontal: Spacing,
                  }}
              >
                <Ionicons
                    name="logo-google"
                    color={Colors.text}
                    size={Spacing * 2}
                />
              </TouchableOpacity>
              <TouchableOpacity
                  style={{
                    padding: Spacing,
                    backgroundColor: Colors.gray,
                    borderRadius: Spacing / 2,
                    marginHorizontal: Spacing,
                  }}
              >
                <Ionicons
                    name="logo-apple"
                    color={Colors.text}
                    size={Spacing * 2}
                />
              </TouchableOpacity>
              <TouchableOpacity
                  style={{
                    padding: Spacing,
                    backgroundColor: Colors.gray,
                    borderRadius: Spacing / 2,
                    marginHorizontal: Spacing,
                  }}
              >
                <Ionicons
                    name="logo-facebook"
                    color={Colors.text}
                    size={Spacing * 2}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
  );
};

export default RegisterScreen;