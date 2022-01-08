import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Image,
} from 'react-native';
import friends from './friends';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FAB } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const width = Dimensions.get("screen").width / 2 - 30;
const FriendsList = ({ navigation }) => {

    const Card = ({ friends }) => {
        return (
            <TouchableOpacity onPress={() => { }}>
                <View style={styles.card}>
                    <View style={{ height: 100, alignItems: 'center' }}>
                        <Image
                            style={{ flex: 1, resizeMode: 'contain', marginTop: 15 }}
                            source={friends.img}
                        />
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>
                        {friends.name}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 5,
                        }}>
                        <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#000fff', }}>"{friends.tag}"</Text>
                    </View>
                </View>

            </TouchableOpacity>

        );
    };
    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 20,
                backgroundColor: '#fff',
            }}>
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>My</Text>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#FFA500' }}>
                        Friends list
                    </Text>
                </View>
                <FAB
                    style={styles.fab}
                    small
                    label="Add friends"
                    onPress={() => { }}
                />
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <View style={styles.searchContainer}>
                    <Icon name="search" size={25} style={{ marginLeft: 20 }} />
                    <TextInput placeholder="Search" style={styles.input} />
                </View>
                <View style={styles.sortButton}>
                    <Icon name="sort" size={30} style={{ color: 'white' }} />
                </View>
            </View>
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                }}
                numColumns={2}
                data={friends}
                renderItem={({ item }) => <Card friends={item} />}
            />

        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchContainer: {
        height: 65,
        backgroundColor: '#F1F1F1',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#000',
        flex: 1,

    },
    sortButton: {
        marginLeft: 10,
        height: 65,
        width: 50,
        borderRadius: 10,
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    categoryText: {
        fontSize: 10,
        color: 'grey',
        fontWeight: 'bold'
    },
    categoryTextSelected: {
        color: 'orange',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: 'orange',
    },
    card: {
        height: 225,
        backgroundColor: 'rgb(192,192,192)',
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: -20,
        bottom: -30,
    },
});

export default FriendsList;