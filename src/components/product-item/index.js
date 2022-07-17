import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles'

const ProductItem = ({ item, onSelected}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.containerTouchable}
                onPress={() => onSelected(item)}
            >
                <Image 
                    style={styles.img}
                    source={{uri: item.img}}
                />
                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.detail}>${item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProductItem;