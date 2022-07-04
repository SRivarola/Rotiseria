import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList } from 'react-native';
import { ProductItem } from '../../components/index';
import { filteredProducts, selectProduct } from '../../store/actions/products.action';
import { styles } from './Styles';

const ProductsScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const filterProducts = useSelector((state) => state.product.filteredProducts);
    const category = useSelector((state) => state.category.selected);

    useEffect(() => {
        dispatch(filteredProducts(category.id))
    }, []);

    const onSelected = (item) => {
        dispatch(selectProduct(item.id))
        navigation.navigate('ProductDetails', {name: item.name})
    }

    const renderItem = ({ item }) => (
        <ProductItem item={item} onSelected={onSelected} />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={filterProducts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default ProductsScreen;