import {Pressable, View} from "react-native";
import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import FontSize from "../constants/FontSize";
import { useNavigation } from "@react-navigation/native";



export default function BottomBar() {
    const navigation = useNavigation();

    const navigateToHomeScreen = () => {
        navigation.navigate("Home");
    };

    return (
        <View style={{
            alignItems: "center",
            marginTop: 240
        }}>
            <View style={{
                flexDirection: "row",
                backgroundColor: Colors.lightPrimary,
                width: '90%',
                justifyContent: "space-evenly",
                borderRadius: 40,
            }}>
                <Pressable
                    style={{
                        padding: 14
                    }}
                    android_ripple={{borderless: true, radius: 50}}
                >
                    <Ionicons
                        style={{
                            fontSize: FontSize.xLarge,
                        }}
                        name={"person-circle"}
                        color={Colors.primary}
                    />
                </Pressable>
                <Pressable
                    onPress={navigateToHomeScreen}
                    style={{
                        padding: 14
                    }}
                    android_ripple={{borderless: true, radius: 50}}
                >
                    <Ionicons
                        style={{
                            fontSize: FontSize.xLarge,
                        }}
                        name={"home"}
                        color={Colors.primary}
                    />
                </Pressable>
                <Pressable
                    style={{
                        padding: 14
                    }}
                    android_ripple={{borderless: true, radius: 50}}
                >
                    <Ionicons
                        style={{
                            fontSize: FontSize.xLarge,
                        }}
                        name={"settings"}
                        color={Colors.primary}
                    />
                </Pressable>
            </View>
        </View>
    );
}
