import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/actions/cart.action'
import { styles } from './Styles';

const ProductDetailsScreen = () => {

    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.selected)

    const onHandlerAddToCart = (item) => {
        dispatch(addItem(product))
    }

    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <TouchableOpacity 
                    onPress={() => onHandlerAddToCart(product)}
                    style={styles.addButton}
                >
                    <Text style={styles.buttonText}>ADD TO CART</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductDetailsScreen;