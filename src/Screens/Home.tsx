import * as React from 'react';

import { StyleSheet, View } from 'react-native';

import { TextInput } from 'react-native-paper';

export default function Home() {

    return (
        <View style={styles.container}>

            <View style={styles.boxInput}>
                <View>
                    <TextInput
                        mode="outlined"
                        label="Insira seu nome:"
                    />
                </View>
                <View style={styles.boxInputAge}>
                    <TextInput
                        mode="outlined"
                        label="Insira sua idade:"
                        keyboardType='numeric'
                    />
                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    boxInput: {
        top: '20%',
        width: '90%',
        height: '100%',
        bottom: '26%',
    },
    boxInputAge: {
        marginTop: '4%'
    }
});
