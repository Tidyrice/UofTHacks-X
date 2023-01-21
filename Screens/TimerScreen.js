import { StyleSheet, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TimerScreen(navigation) {
    return (
        <SafeAreaView style = {styles.view}>

            <Text style = {styles.text}>
                00:00
            </Text>

            <Pressable style = {({pressed}) => [
                {
                    opacity: pressed ? 0.3 : 1,
                },
                styles.pressable,
            ]}>

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
    pressableText: {
        fontWeight: "bold",
        fontSize: 48,
    },
});