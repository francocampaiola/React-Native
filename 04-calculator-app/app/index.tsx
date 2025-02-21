import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
import { View, Text } from 'react-native'

const CalculatorApp = () => {
    return (
        <View>
            <Text style={globalStyles.mainResult} numberOfLines={2} adjustsFontSizeToFit>50 x 500000000000000000</Text>
            <Text style={globalStyles.subResult}>250</Text>
        </View>
    )
}

export default CalculatorApp