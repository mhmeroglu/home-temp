import {
    Alert,
    Button,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, {useState} from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import {Ionicons} from "@expo/vector-icons";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types";
import BottomBar from "../components/BottomBar";

type Props = NativeStackScreenProps<RootStackParamList, "Room"> & {
    route: { params: { roomName: string } };
};

const RoomScreen: React.FC<Props> = ({route}) => {
    const [number, setNumber] = useState(generateRandomNumber());
    const [changeNumber, setChangeNumber] = useState(number);
    const [text, setText] = useState("stable")

    function generateRandomNumber() {
        return Math.floor(Math.random() * (38 - 16 + 1)) + 16;
    }

    function increaseNumber() {
        if (changeNumber < 35) {
            setChangeNumber((prevNumber) => prevNumber + 1);
            if (changeNumber >= number) {
                setText("heating..");
            }
        } else if (changeNumber >= 35) {
            Alert.alert(
                "Warning",
                "The temperature is too high for safety."
            );
        }
    }

    function decreaseNumber() {
        if (changeNumber > 16) {
            setChangeNumber((prevNumber) => prevNumber - 1);
            if (changeNumber <= number) {
                setText("cooling..");
            }
        } else if (changeNumber <= 16) {
            Alert.alert(
                "Warning",
                "The temperature is too low for safety"
            );
        }
    }

    const addButton = () =>
        Alert.alert('Trouble', 'System not working properly? ' +
            'If you choose yes we will contact you', [
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

    let source: any;
    if (route.params.roomName === "Living Room") {
        source = require("../assets/images/living-room.jpg");
    } else if (route.params.roomName === "Kitchen") {
        source = require("../assets/images/kitchen.jpg");
    } else if (route.params.roomName === "Bedroom") {
        source = require("../assets/images/bedroom.jpg");
    } else {
        // Set source to a placeholder image or null
        source = null;
        console.log("Photo not found");
    }

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
                        {route.params.roomName}
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
                            name="alert-circle"
                            color={Colors.alert}
                        />
                    </TouchableOpacity>
                </View>
                <ImageBackground
                    style={{
                        alignItems: "center",
                        padding: Spacing * 4,
                        marginVertical: Spacing * 0.4,
                        shadowColor: Colors.primary,
                        shadowOffset: {
                            width: 0,
                            height: Spacing,
                        },
                        shadowOpacity: 0.3,
                        shadowRadius: Spacing,
                        opacity: 0.9,
                    }}
                    imageStyle={{borderRadius: 10}}
                    source={source}
                >
                    <Text
                        style={{
                            fontSize: FontSize.xxLarge * 1.5,
                            color: Colors.onPrimary,
                            fontFamily: Font["poppins-bold"],
                            marginVertical: Spacing * 0.5,
                        }}
                    >
                        {number}°
                    </Text>
                </ImageBackground>
            </View>
            <View
                style={{
                    padding: Spacing,
                    margin: Spacing,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <TouchableOpacity
                    onPress={decreaseNumber}
                    style={{
                        padding: Spacing,
                        margin: Spacing,
                        marginTop: 40,
                    }}
                >
                    <Ionicons
                        style={{
                            fontSize: FontSize.xxLarge,
                        }}
                        name="chevron-down-circle"
                        color={Colors.primary}
                    />
                </TouchableOpacity>

                <Text
                    style={{
                        fontSize: FontSize.xxLarge * 2.5,
                        color: Colors.primary,
                        fontFamily: Font["poppins-bold"],
                    }}
                >
                    {changeNumber}
                </Text>

                <TouchableOpacity
                    onPress={increaseNumber}
                    style={{
                        padding: Spacing,
                        margin: Spacing,
                        marginTop: 40,
                    }}
                >
                    <Ionicons
                        style={{
                            fontSize: FontSize.xxLarge,
                        }}
                        name="chevron-up-circle"
                        color={Colors.primary}
                    />
                </TouchableOpacity>
            </View>

            <View
                style={{
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        alignItems: "center",
                        fontFamily: Font["poppins-regular"],
                        fontSize: FontSize.small,
                        maxWidth: "80%",
                        textAlign: "center",
                    }}
                >
                    Room temperature is {text}.
                </Text>
            </View>
            <View
                style={{
                    width: '90%',
                    marginLeft:20
                }}
            >
                <BottomBar/>
            </View>
        </SafeAreaView>
    );
};

export default RoomScreen;
const styles = StyleSheet.create({});
