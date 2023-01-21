import { startTransition, useCallback, useEffect, useRef, useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TimerScreen(navigation) {

    const [time, setTime] = useState(0);
    const [isRunning, setRunning] = useState(false);
    const timer = useRef(null);

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const RightButtonPress = useCallback(() => {
        if (!isRunning) { //start
            const interval = setInterval(() => {
                setTime((previousTime) => previousTime + 1);
            }, 1000);

            timer.current = interval;
            setRunning(true);

        } else { //pause
            clearInterval(timer.current);
            setRunning(false);
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
    

    return (
        <SafeAreaView style = {styles.view}>

            <Text style = {styles.text}>
                {minutes + ":" + seconds}
            </Text>

            <View style = {styles.buttonContainer}>
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
                            opacity: pressed ? 0.3 : 1,
                        },
                        styles.pressable,
                    ]}
                >
                    <Text style = {styles.pressableText}>
                        Reset
                    </Text>
                </Pressable>

                <Pressable
                    onPress = {() => { //start/stop
                        RightButtonPress();
                    }}
                    style = {({pressed}) => [
                        {
                            opacity: pressed ? 0.3 : 1,
                        },
                        styles.pressable,
                    ]}
                >
                    <Text style = {styles.pressableText}>
                        {isRunning ? "Stop Timer" : "Start Timer"}
                    </Text>
                </Pressable>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",
        fontSize: 48,
        padding: 8,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    pressable: {
        borderColor: "black",
        borderWidth: 4,
        padding: 8,
        margin: 8,
    },
    pressablePressed: {
        
    },
    pressableText: {
        fontWeight: "bold",
        fontSize: 28,
        alignSelf: "center",
    },
});