import * as React from 'react';

import { StyleSheet, View } from 'react-native';

import { TextInput } from 'react-native-paper';

export default function InputAge() {

    return (
        <View style={styles.container2}>

            <View style={styles.boxInput2}>

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

});
