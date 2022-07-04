import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles'

const CategoryItem = ({ item, onSelected}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.containerTouchable}
                onPress={() => onSelected(item)}
            >
                <Image 
                    style={styles.imagen}
                    source={{uri: item.img}}
                />
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryItem;