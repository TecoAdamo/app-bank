import React, { useState } from 'react';

import { StyleSheet, View } from 'react-native';

import { Picker } from '@react-native-picker/picker';

interface PickerSexualityProps {
    sex: number | null;
    setSex: React.Dispatch<React.SetStateAction<number | null>>;
}

const PickerSexuality: React.FunctionComponent<PickerSexualityProps> = ({ sex, setSex }) => {
    return (
        <View style={styles.pickerContainer}>
            <Picker
                style={styles.pickerBox}
                selectedValue={sex}
                onValueChange={(value) => setSex(value)}
            >
                <Picker.Item key={1} label="Masculino" value={1} />
                <Picker.Item key={2} label="Feminino" value={2} />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    pickerContainer: {
        top: '30%',
        alignItems: 'center',
        width: '100%',

    },

    pickerBox: {
        width: '106%',
    },

});
export default PickerSexuality;
