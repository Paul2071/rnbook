import { StyleSheet, Text, View } from "react-native";


export default function Header () {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My list</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 40,
        backgroundColor: "teal"
    },
    title: {
        textAlign:"center",
        color: "fff",
        fontSize: 20,
        fontWeight: "bold"    

    },

})