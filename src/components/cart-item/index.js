import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import IonicIcons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';
import { colors } from '../../constants/theme/colors'

const CartItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>
                    <Text style={styles.categoryTitle}>[{item.categoryTitle}]</Text>
                    {item.name} (x{item.quantity})
                </Text>
                <Text style={styles.detailPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity
                onPress={() => onDelete(item.id)}
                style={styles.deleteButton}
            >
                <IonicIcons name='trash' size={20} color={colors.primary} />
            </TouchableOpacity>
        </View>
    )
}

export default CartItem;