import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        margin: 20,
        height: 150,
    },
    containerTouchable: {
        flex: 1,
        borderRadius: 10,
        shadowColor: colors.shadow,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        padding: 10,
        backgroundColor: '#ffffff',
    },
    name:{
        fontFamily: 'Lato-Bold',
        fontSize: 16,
    },
    detail:{
        fontFamily: 'Lato-Regular',
        fontSize: 14,
    },
});