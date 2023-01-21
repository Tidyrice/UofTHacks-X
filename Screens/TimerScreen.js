import { startTransition, useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TimerScreen(navigation) {


    const [time, setTime] = useState(0);
    const [isRunning, setRunning] = useState(false);
    const [results, setResults] = useState(false);
    const timer = useRef(null);

    const RightButtonPress = useCallback(() => {
        if (!isRunning) { //start
            const interval = setInterval(() => {
                setTime((previousTime) => previousTime + 1);
                console.log(time);
            }, 1000);

            timer.current = interval;
            setRunning(true);

        } else { //pause
            clearInterval(timer.current);
            setRunning(false);
        }
    }, [isRunning, time]);
    

    return (
        <SafeAreaView style = {styles.view}>

            <Text style = {styles.text}>
                {time}
            </Text>

            <Pressable
                onPress = {() => {
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
                    Start Timer!
                </Text>
            </Pressable>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",
        fontSize: 32,
        padding: 8,
    },
    pressable: {
        borderColor: "black",
        borderWidth: 4,
        padding: 8,
    },
    pressablePressed: {
        
    },
    pressableText: {
        fontWeight: "bold",
        fontSize: 48,
    },
});