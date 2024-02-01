import { Slider } from "native-base";
import { useState } from "react";
import { StyleSheet, View, Text } from 'react-native';

export default function SliderMoney() {
    const [balance, setBalance] = useState<number>(0)

    return (
        <View style={styles.sliderContainer}>
            <Text>Limite de crédito: R$ {balance.toFixed(2)} </Text>
            <Slider
                w="3/4"
                step={10}
                maxW={300}
                minValue={0}
                maxValue={500}
                defaultValue={70}
                colorScheme="violet"
                onChange={(valor) => setBalance(valor)}
            >
                <Slider.Track>
                    <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />

            </Slider>
        </View>
    );
}

const styles = StyleSheet.create({
    sliderContainer: {
        alignItems: 'center',
        top: '42%'

    },
});
