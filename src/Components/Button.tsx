
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface ButtonSendProps {
    onPress: () => void;
}

export default function ButtonSend({ onPress }: ButtonSendProps) {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btnBox} onPress={onPress}>
                <Text style={styles.textBtn}>Criar conta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        top: '80%',
    },
    btnBox: {
        borderWidth: 2,
        borderColor: '#5b21b6',
        padding: 14,
        borderRadius: 12
    },
    textBtn: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 18
    }
});
