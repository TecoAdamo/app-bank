import { Switch } from "native-base";

import { StyleSheet, View, Text } from 'react-native';

export default function StudentySwitch() {


    return (
        <View style={styles.switchContainer}>

            <Text>Você é estudante? </Text>

            <Switch
                offTrackColor="violet.300"
                onTrackColor="violet.300"

                onThumbColor="violet.600"
                offThumbColor="white" />

        </View>
    );
}

const styles = StyleSheet.create({
    switchContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: '38%',
        flexDirection: 'row',
        gap: 50

    },
});
