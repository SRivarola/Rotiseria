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
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#ffffff',
    },
    img: {
        position: 'relative',
        top: 0,
        left: 0,
        height: '100%',
        width: '60%',
        borderRadius: 10,
    },
    textContainer: {
        flex: 1,
        height: 160,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    name:{
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        textAlign: 'right',
    },
    detail:{
        fontFamily: 'Lato-Regular',
        fontSize: 20,
    },
});