import { Slider } from "native-base";

import { StyleSheet, View, Text } from 'react-native';

interface SliderMoneyProps {
    balance: number
    onSliderChange: (value: number) => void
}

const SliderMoney: React.FunctionComponent<SliderMoneyProps> = ({ balance, onSliderChange }) => {
    const isZeroBalance = balance === 0;

    return (
        <View style={styles.sliderContainer}>
            <Text>Limite de crédito: R$ {balance.toFixed(2)} </Text>
            <Slider
                w="3/4"
                step={10}
                maxW={300}
                minValue={0}
                maxValue={400}
                defaultValue={isZeroBalance ? 0.1 : balance}
                colorScheme="violet"
                onChange={(valor) => onSliderChange(valor)}
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

export default SliderMoney;