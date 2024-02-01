import * as React from 'react';
import { useState } from 'react';

import { StyleSheet, View } from 'react-native';

import { TextInput } from 'react-native-paper';

export default function InputName() {
    const [text, setText] = useState("");

    return (
        <View style={styles.container}>

            <View style={styles.boxInput}>

                <TextInput
                    // style={styles.input}
                    mode="outlined"
                    label="Insira seu nome:"

                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: '40%',
        alignItems: 'center'
    },
    boxInput: {
        width: '90%',
        height: '100%',
        bottom: '26%',

    },
});
