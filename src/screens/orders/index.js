import React, { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { OrderItem } from '../../components/index';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders, deleteOrder } from '../../store/actions/order.action';
import { styles } from './styles';

const OrdersScreen = () => {

    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order.items)

    const onDeleteOrder = (id) => {
        dispatch(deleteOrder(id))
    };

    const renderItem = ({ item }) => (
        <OrderItem item={item} onDelete={onDeleteOrder} />
    );

    useEffect(() => {
        dispatch(getOrders())
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My orders</Text>
            <View style={styles.orderList}>
                <FlatList
                    data={orders}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default OrdersScreen;