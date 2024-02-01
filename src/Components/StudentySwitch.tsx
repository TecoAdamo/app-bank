import { Switch } from "native-base";

import { StyleSheet, View, Text } from 'react-native';

interface StudentySwitchProps {
    isStudent: boolean;
    onSwitchChange: (value: boolean) => void;
}

const StudentySwitch: React.FC<StudentySwitchProps> = ({ isStudent, onSwitchChange }) => {

    return (
        <View style={styles.switchContainer}>

            <Text>Você é estudante? </Text>

            <Switch
                isChecked={isStudent}
                onToggle={(value) => onSwitchChange(value)}
                offTrackColor="violet.300"
                onTrackColor="violet.300"

                onThumbColor="violet.600"
                offThumbColor="white" />



        </View>
    );
}
export default StudentySwitch;

const styles = StyleSheet.create({
    switchContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: '38%',
        flexDirection: 'row',
        gap: 50

    },
});