import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import {Ionicons} from "@expo/vector-icons";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types";
import AppTextInput from "../components/AppTextInput";
import {useState} from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({navigation: {navigate}}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("usersData");
            const usersData = jsonValue ? JSON.parse(jsonValue) : { users: [] };

            const user = usersData.users.find((user: any) => user.email === email && user.password === password);
            if (user) {
                navigate("Home");
            } else {
                setError("Invalid email or password");
                Alert.alert("Error", "Invalid email or password");
            }
        } catch (error) {
            console.log("Error retrieving user data", error);
        }
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
                        Login
                    </Text>
                    <Text
                        style={{
                            fontFamily: Font["poppins-semiBold"],
                            fontSize: FontSize.large,
                            maxWidth: "60%",
                            textAlign: "center",
                        }}
                    >
                        Welcome back!
                    </Text>
                </View>
                <View
                    style={{
                        marginVertical: Spacing * 3,
                    }}
                >
                    <AppTextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <AppTextInput
                        secureTextEntry={true}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <View>
                    <Text
                        style={{
                            fontFamily: Font["poppins-semiBold"],
                            fontSize: FontSize.small,
                            color: Colors.primary,
                            alignSelf: "flex-end",
                        }}
                    >
                        Forgot your password ?
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={handleLogin}
                    style={{
                        padding: Spacing * 2,
                        backgroundColor: Colors.primary,
                        marginVertical: Spacing * 3,
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
                        Sign in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate("Register")}
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
                        Create new account
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

export default LoginScreen;

const styles = StyleSheet.create({});