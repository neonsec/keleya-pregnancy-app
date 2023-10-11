import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,

} from 'react-native';
import { Text, IconButton } from 'react-native-paper';

// import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { useStore } from 'app/store';
import { } from 'react-native-gesture-handler';
import Button from 'app/components/Button';


const NotificationScreen: React.FC = () => {

    const ClickLogin = () => NavigationService.navigate('Login');
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/notifications-background-image.jpg')}
                style={styles.headerBackground}>



                <View style={styles.spacing}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <IconButton
                            icon="bell-outline"
                            iconColor="#4a4a4a"
                            size={50}
                            onPress={() => console.log('Pressed')}
                        />

                    </View>
                    <Text style={styles.destinationName}>
                        Get notifications to boost your motivation
                    </Text>
                </View>

                <View style={styles.heartView}>
                    <Text style={styles.ratingText}>
                        Skip
                    </Text>

                    <View style={styles.spacing}>
                        <Button isFullWidth backgroundColor='#69c0ba' onPress={ClickLogin}>
                            <Text variant="titleLarge" style={{ color: 'white' }} > Allow notifications</Text>
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    headerBackground: {
        width: '100%',
        height: '95%',
    },
    backBtn: {
        position: 'absolute',
        left: 30,
        top: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxSpacing: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    logo: {
        width: 80,
        height: 100,
    },
    spacing: {
        marginTop: 30
    },
    ratingText: {
        fontSize: 16,
        color: '#4a4a4a',
        marginHorizontal: 10,
        marginVertical: 10,
        textAlign:'center'
    },
    destinationName: {
        fontSize: 25,
        padding: 4,
        paddingLeft: 40,
        paddingRight: 40,
        color: '#4a4a4a',
        fontWeight: '500',
        textAlign: 'center'
    },
    heartView: {
        position: 'absolute',
        left: 30,
        right: 30,
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyText: {
        width: '100%',
        // paddingHorizontal: 30,
        // marginVertical: 20,
        marginBottom: 100,

    },
    description: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
    },
    details: {
        fontSize: 16,
        marginVertical: 20,
        lineHeight: 25,
        color: '#000000',
    },
    showMore: {
        fontSize: 18,
        color: '#0359c9',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    categoriesBackground: {
        height: 170,
        width: 170,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleView: {
        width: 120,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default NotificationScreen;
