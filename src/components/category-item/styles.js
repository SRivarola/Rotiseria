import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        margin: 20,
        height: 180,
    },
    containerTouchable: {
        flex: 1,
        borderRadius: 10,
        shadowColor: colors.shadow,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 4,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        position: 'relative',
    },
    imagen: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        borderRadius: 10,
    },
    title:{
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: colors.white,
        margin: 10,
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 5,
    },
});