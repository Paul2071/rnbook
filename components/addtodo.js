import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import { useState } from "react"

export default function Addtodo ( {submitHandler}) {

    const [text, setText] = useState("")

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="enter thing to do..."
                onChangeText={changeHandler}

            />

            <Button 
            onPress={() => submitHandler(text)} 
            title="add to list"
            color="teal"    
            />

        </View>
    )
}

const styles= StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "teal"
    }
})