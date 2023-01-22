import { startTransition, useCallback, useEffect, useRef, useState } from "react";
import { View, StyleSheet, Pressable, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoadData } from "../SaveSystem/SaveSystem";

export default function TimerScreen({navigation}) {

    //DATA
    const [data, setData] = useState(null);

    const [time, setTime] = useState(0);
    const [isRunning, setRunning] = useState(false);
    const timer = useRef(null);

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [gender, setGender] = useState("female");

    const RightButtonPress = useCallback(() => {
        if (!isRunning) { //start
            const interval = setInterval(() => {
                setTime((previousTime) => previousTime + 1);
            }, 1000);

            timer.current = interval;
            setRunning(true);

        } else { //SUBMIT
            clearInterval(timer.current);
            setRunning(false);
            //SUBMIT

        }
    }, [isRunning, time]);

    //convert seconds to minutes and seconds (pretty formatting)
    const UpdateTime = useEffect(() => {
        if (minutes < 9 || minutes == 59) {
            setMinutes("0" + Math.floor(time / 60));
        } else {
            setMinutes(Math.floor(time / 60));
        }

        if (seconds < 9 || seconds == 59) {
            setSeconds("0" + time % 60)
        } else {
            setSeconds(time % 60)
        }
    }, [time]);

    //load data from database
    /*useEffect(() => {
        LoadData()
        .then(data => {
            setData(data); //load data
        });
    }, []);*/

    //navigation bar
    useEffect (() => {
        navigation.setOptions({
            title: "Piss'd Off",
        });
    }, [])
    

    return (
        <SafeAreaView style = {styles.view}>

            <View style = {styles.timerContainer}>
                <Text style = {styles.timerText}>
                    {minutes + ":" + seconds}
                </Text>
            </View>

            <View style = {styles.pressableContainer}>
                <Pressable
                    disabled = {time ? false : true}
                    onPress = {() => { //reset (BUTTON SHOULD NOT BE ACTIVE WHEN TIME IS 00:00)
                        clearInterval(timer.current);
                        setRunning(0);
                        setTime(0);
                        setMinutes(0);
                        setSeconds(0);
                    }}
                    style = {({pressed}) => [ //MAKE BUTTON DIM IF DISABLED???!?!??!!
                        {
                            opacity: pressed ? 0.4 : 1,
                        },
                        styles.pressable,
                    ]}
                >
                    <Text style = {styles.pressableText}>
                        Reset
                    </Text>
                </Pressable>

                <Pressable
                    onPress = {() => {
                        RightButtonPress();
                    }}
                    style = {({pressed}) => [
                        {
                            opacity: pressed ? 0.4 : 1,
                        },
                        styles.tapIn
                    ]}
                >
                    <Text style = {styles.pressableText}>
                        {isRunning ? "Tap out" : "Tap in"}
                    </Text>
                </Pressable>
            </View>

            <View>
                <Text style = {{fontSize: 24, fontWeight: "bold"}}>Washroom:</Text>

                <Pressable
                    onPress = {() => { //female
                        setGender("female");
                    }}
                    style = {({pressed}) => [
                        {
                            opacity: pressed ? 0.4 : 0.4, //SUS CODE --!__!_!_-1__!__1--!_!!!__!_!__!_!!
                        },
                        styles.genderPressable
                    ]}
                >
                    <Text style = {styles.genderPressableText}>Female</Text>
                </Pressable>

                <Pressable
                    onPress = {() => { //male
                        setGender("male");
                    }}
                    style = {({pressed}) => [
                        {
                            opacity: pressed ? 0.4 : 1,
                        },
                        styles.genderPressable
                    ]}
                >
                    <Text style = {styles.genderPressableText}>Male</Text>
                </Pressable>

                <Pressable
                    onPress = {() => { //male
                        setGender("other");
                    }}
                    style = {({pressed}) => [
                        {
                            opacity: pressed ? 0.4 : 1,
                        },
                        styles.genderPressable
                    ]}
                >
                    <Text style = {styles.genderPressableText}>Other</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFDDDD",
    },
    timerContainer: {
        alignContent: "center",
        borderColor: "black",
        borderWidth: 4,
        backgroundColor: "white",
        padding: 20,
        margin: 20,
    },
    timerText: {
        fontWeight: "bold",
        fontSize: 100,
    },
    pressableContainer: {
        flexDirection: "row",
        marginBottom: 48,
    },
    pressable: {
        borderColor: "black",
        borderWidth: 4,
        padding: 12,
        margin: 8,
        backgroundColor: "#DFDFDF",
    },
    tapIn: {
        borderColour: "grey",
        borderWidth: 4,
        padding: 12,
        margin: 8,
        backgroundColor: "#AAFFBB"
    },
    pressableText: {
        fontWeight: "bold",
        fontSize: 28,
        alignSelf: "center",
    },
    genderPressable: {
        borderColor: "black",
        borderWidth: 2,
        padding: 12,
        margin: 8,
    },
    genderPressableText: {
        fontSize: 18,
        alignSelf: "center"
    }
});