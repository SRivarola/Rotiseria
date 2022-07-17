import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    preview: {
        width: "100%",
        height: 350,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 20,
    },
    text: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 19,
    },
    btnTakePic: {
        alignItems: 'center',
        marginHorizontal: '25%',
        borderRadius: 10,
        backgroundColor: colors.primary,
    },
    btnText: {
        paddingVertical: 10,
        color: colors.white,
        fontFamily: 'Lato-Bold'
    },
  });