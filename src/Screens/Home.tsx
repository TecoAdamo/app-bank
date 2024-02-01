import * as React from 'react';

import { StyleSheet, View } from 'react-native';

import { TextInput } from 'react-native-paper';
import PickerSexuality from '../Components/PickerSexuality';
import SliderMoney from '../Components/SliderMoney';
import { NativeBaseProvider } from 'native-base';

export default function Home() {

    return (
        <NativeBaseProvider>

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
                        <PickerSexuality />
                        <SliderMoney />
                    </View>
                </View>

            </View>
        </NativeBaseProvider>
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
