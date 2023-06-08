import {
    Alert, Button, ImageBackground,
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
import {Ionicons} from "@expo/vector-icons";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types";
import BottomBar from "../components/BottomBar";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({navigation: {navigate}}) => {
    const addButton = () =>
        Alert.alert('New Room', 'Do you want system setup for a new room? If you choose yes, our company will contact you.', [
            {
                text: 'Yes',
                onPress: () => console.log('Yes Pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
        ]);

    const livingRoom = "Living Room";
    const kitchen = "Kitchen";
    const bedRoom = "Bedroom";



    return (
        <SafeAreaView>
            <View
                style={{
                    padding: Spacing * 2,
                }}
            >
                <View
                    style={{
                        padding: Spacing,
                        margin: Spacing,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text
                        style={{
                            fontSize: FontSize.xLarge,
                            color: Colors.primary,
                            fontFamily: Font["poppins-bold"],
                            marginVertical: Spacing * 0.5,
                        }}
                    >
                        My Home
                    </Text>
                    <TouchableOpacity
                        onPress={addButton}
                        style={{
                            padding: Spacing,
                            margin: Spacing,
                            marginRight: 0,
                            marginTop: 0,
                            borderRadius: Spacing / 2,
                            marginHorizontal: Spacing,
                        }}
                    >
                        <Ionicons
                            style={{
                                fontSize: FontSize.xxLarge,
                            }}
                            name="add-circle"
                            color={Colors.primary}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            // @ts-ignore
                            navigate("Room", {roomName: livingRoom});
                        }}
                    >
                        <ImageBackground
                            style={{
                                padding: Spacing * 4,
                                marginVertical: Spacing * 0.4,
                                shadowColor: Colors.primary,
                                shadowOffset: {
                                    width: 0,
                                    height: Spacing,
                                },
                                shadowOpacity: 0.3,
                                shadowRadius: Spacing,
                                opacity: 0.8
                            }}
                            imageStyle={{borderRadius: 10}}
                            source={require("../assets/images/living-room.jpg")}
                        >
                            <Text
                                style={{
                                    fontFamily: Font["poppins-bold"],
                                    color: Colors.onPrimary,
                                    fontSize: FontSize.large,
                                }}
                            >
                                Living Room
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            // @ts-ignore
                            navigate("Room", {roomName: kitchen});
                        }}
                    >
                        <ImageBackground
                            style={{
                                padding: Spacing * 4,
                                marginVertical: Spacing * 0.4,
                                shadowColor: Colors.primary,
                                shadowOffset: {
                                    width: 0,
                                    height: Spacing,
                                },
                                shadowOpacity: 0.3,
                                shadowRadius: Spacing,
                                opacity: 0.8
                            }}
                            imageStyle={{borderRadius: 10}}
                            source={require("../assets/images/kitchen.jpg")}
                        >
                            <Text
                                style={{
                                    fontFamily: Font["poppins-bold"],
                                    color: Colors.onPrimary,
                                    fontSize: FontSize.large,
                                }}
                            >
                                Kitchen
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            // @ts-ignore
                            navigate("Room", {roomName: bedRoom});
                        }}
                    >
                        <ImageBackground
                            style={{
                                padding: Spacing * 4,
                                marginVertical: Spacing * 0.4,
                                shadowColor: Colors.primary,
                                shadowOffset: {
                                    width: 0,
                                    height: Spacing,
                                },
                                shadowOpacity: 0.3,
                                shadowRadius: Spacing,
                                opacity: 0.8
                            }}
                            imageStyle={{borderRadius: 10}}
                            source={require("../assets/images/bedroom.jpg")}
                        >
                            <Text
                                style={{
                                    fontFamily: Font["poppins-bold"],
                                    color: Colors.onPrimary,
                                    fontSize: FontSize.large,
                                }}
                            >
                                Bedroom
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        marginTop: 55,
                    }}
                >
                    <BottomBar/>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});