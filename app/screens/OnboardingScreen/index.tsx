import React, { useEffect, useState } from 'react';
import {
    View, Image,
    StyleSheet,
    ImageBackground,
    TouchableWithoutFeedback,


} from 'react-native';
import { IconButton, Text, } from 'react-native-paper';

// import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { } from 'react-native-gesture-handler';
import Button from 'app/components/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTranslation } from 'react-i18next';
import '../../i18n/index';


const OnboardinScreen: React.FC = () => {
    const { t, i18n } = useTranslation(); // destructure i18n here
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('en');
    const [items, setItems] = useState([
        { label: '🇬🇧 ', value: 'en' },
        { label: '🇩🇪', value: 'de' },
    ]);

    useEffect(() => {
        i18n.changeLanguage(value);
    }, [value]);


    const ClickLogin = () => NavigationService.navigate('Login');
    const ClickSignup = () => NavigationService.navigate('Signup');

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/first-intro-image.png')}
                style={styles.headerBackground}>
                <View style={styles.backBtn}>

                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={{ width: 70, height: 30 }}
                    />
                </View>
                <View style={styles.spacing}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/keleya-logo.png')}
                        />
                    </View>
                    <Text style={styles.destinationName}>
                        {t('translateApp.title')}
                    </Text>
                </View>

                <View style={styles.heartView}>


                    <View style={styles.spacing}>

                        <Button isFullWidth backgroundColor='#69c0ba' onPress={ClickSignup}>
                            <Text variant="titleLarge" style={{ color: 'white' }} > {t('translateApp.getStarted')} </Text>
                        </Button>
                    </View>
                    <Text onPress={ClickLogin} style={styles.ratingText}>
                    {t('translateApp.orLogin')}
                    </Text>
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
        right: 30,
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
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    destinationName: {
        fontSize: 22,
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

export default OnboardinScreen;
