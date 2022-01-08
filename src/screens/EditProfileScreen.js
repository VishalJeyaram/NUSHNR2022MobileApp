import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    Image,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import ModalSelector from 'react-native-modal-selector'
import { windowHeight, windowWidth } from '../utils/Dimensions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';




const EditProfile = () => {

    var storageRef = Firebase.storage().ref();
    const { colors } = useTheme();

    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);



    const [name, setName] = useState();


    const [userData, setUserData] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const uploadImage = async () => {


        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function () {
                reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', image, true);
            xhr.send(null);
        });


        const ref = Firebase.storage().ref().child(new Date().toISOString())
        const snapshot = ref.put(blob)


        snapshot.on(Firebase.storage.TaskEvent.STATE_CHANGED, () => {
            setUploading(true)
        },
            (error) => {
                setUploading(false)
                console.log(error);
                blob.close()
                return
            },
            () => {
                snapshot.snapshot.ref.getDownloadURL().then((url) => {
                    setUploading(false)
                    console.log("download url :", url);
                    blob.close();
                    navigation.goBack();
                    return url;
                });
            }
        );
    };

    return (
        <KeyboardAwareScrollView>
            <View style={styles.container} behavior="padding">
                <View style={{ marginTop: 100, alignItems: 'center' }}>
                    <Image
                        source={{ uri: image }}
                        style={{
                            height: 160,
                            width: 160,
                            borderWidth: 2,
                            borderColor: 'black',
                            borderRadius: 100
                        }}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity style={styles.panelButton} onPress={pickImage} >
                        <Text style={styles.panelButtonTitle}>Upload New Pic</Text>
                    </TouchableOpacity>
                    <View style={styles.inputContainer}>
                        <View style={styles.iconStyle}>
                            <Icon name="user" size={25} color="#666" />
                        </View>
                        <TextInput
                            style={styles.input}
                            numberOfLines={1}
                            placeholder="Name"
                            placeholderTextColor="#666666"
                            onChangeText={name => { setName(name) }}
                            defaultValue='Billy'
                        />
                    </View>



                    {!uploading ? < TouchableOpacity style={styles.commandButtonSave} onPress={uploadImage}>
                        <Text style={styles.panelButtonTitleSave}>Update Profile</Text>
                    </TouchableOpacity> : <ActivityIndicator size='large' color='#000' />}


                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default EditProfile;


const styles = StyleSheet.create({
    saving: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        margin: 20,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        alignItems: 'center'
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    commandButtonSave: {
        padding: 10,
        backgroundColor: '#448EE4',
        alignItems: 'center',
    },
    deletebutton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#FF0000',
        alignItems: 'center',
    },
    panelButtonTitleSave: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    }
});


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 1,
        color: "black",


    },
    inputAndroid: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 1,
        color: "black"
    },
    iconContainer: {
        left: 0,
        bottom: 15
    }
});