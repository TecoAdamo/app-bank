import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import PickerSexuality from '../Components/PickerSexuality';
import SliderMoney from '../Components/SliderMoney';
import StudentySwitch from '../Components/StudentySwitch';
import ButtonSend from '../Components/Button';
import { NativeBaseProvider } from 'native-base';

export default function Home() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState<number | null>(0)
    const [balance, setBalance] = useState(0);
    const [isStudent, setIsStudent] = useState(false);



    const handleSliderChange = (valor: number) => {
        setBalance(valor);
    };

    const handleSwitchChange = (value: boolean) => {
        setIsStudent(value);
    };
    const handleButtonPress = () => {
        if (name === '' || age === '') {
            Alert.alert('Preencha os campos!')
        } else {
            const sexOptions = ['Masculino', 'Feminino', 'Prefiro não responder'];
            const infoString = `Nome: ${name}\nIdade: ${age}\nSexo: ${sexOptions[sex || 0]}\nEstudante: ${isStudent ? 'Sim' : 'Não'}\nValor do Slider: R$ ${balance.toFixed(2)}`;

            Alert.alert('Conta criada:', infoString);

            setName('')
            setAge('')
            setBalance(0)
            setSex(0)
            if (isStudent === true) {
                setIsStudent(false)
            }
        }
    };

    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <View style={styles.boxInput}>
                    <View>
                        <TextInput
                            mode="outlined"
                            label="Insira seu nome:"
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                    </View>
                    <View style={styles.boxInputAge}>
                        <TextInput
                            mode="outlined"
                            label="Insira sua idade:"
                            keyboardType="numeric"
                            value={age}
                            onChangeText={(text) => setAge(text)}
                        />
                        <PickerSexuality sex={sex} setSex={setSex} />
                        <SliderMoney balance={balance} onSliderChange={handleSliderChange} />
                        <StudentySwitch isStudent={isStudent} onSwitchChange={handleSwitchChange} />
                        <ButtonSend onPress={handleButtonPress} />
                    </View>
                </View>
            </View>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    boxInput: {
        top: '20%',
        width: '90%',
        height: '100%',
        bottom: '26%',
    },
    boxInputAge: {
        marginTop: '4%',
    },
});
