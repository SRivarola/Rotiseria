import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
  headerContainer: {},
  header: {
    fontSize: 18,
    fontFamily: "Lato-Bold",
    textAlign: 'center',
  },
  containerDetail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemsName: {
    marginLeft: 5,    
  },
  detailTotal: {
    fontSize: 14,
    fontFamily: "Lato-Bold",
    marginLeft: 5, 
    marginTop: 5,
  },
});