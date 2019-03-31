import React from 'react';
import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';

import facebook from './/asset/facebook.png';
import google from './/asset/google.png';
import yahoo from './/asset/yahoo.png'

class LoginForm extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.inputEmailText}>
                    Nomer Ponsel atau Email
                    </Text>
                <View style={styles.bottomStyle}>
                    <TextInput style={styles.inputStyle} />
                </View>

                <Text style={styles.inputEmailText}>
                    Kata Sandi
                    </Text>
                <View style={styles.bottomStyle}>
                    <TextInput style={styles.inputStyle} />
                </View>

                <TouchableHighlight>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.textButton}>
                            Selanjutnya
                        </Text>
                    </View>
                </TouchableHighlight>

                <View style={styles.pilihanStyle}>
                    <View style={styles.garisKiriKanan} />
                    <Text>atau masuk dengan </Text>
                    <View style={styles.garisKiriKanan} />
                </View>

                <TouchableHighlight>
                    <View style={{ paddingTop: 15 }}>
                        <View style={styles.buttonStyleGoogle}>
                            <View style={styles.imagePoisition}>
                                <Image
                                    style={styles.imageStyle}
                                    source={google} />
                            </View>
                            <View style={styles.textPosition}>
                                <Text style={styles.textButtonLain}>
                                    Google
                            </Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight>
                    <View style={{ paddingTop: 15, }}>
                        <View style={styles.buttonStyleFacebook}>
                            <View style={styles.imagePoisition}>
                                <Image
                                    style={styles.imageStyleFacebook}
                                    source={facebook} />
                            </View>
                            <View style={styles.textPosition}>
                                <Text style={styles.textButtonLain}>
                                    Facebook
                            </Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight>
                    <View style={{ paddingTop: 15 }}>
                        <View style={styles.buttonStyleYahoo}>
                            <View style={styles.imagePoisition}>
                                <Image
                                    style={styles.imageStyle}
                                    source={yahoo} />
                            </View>
                            <View style={styles.textPosition}>
                                <Text style={styles.textButtonLain}>
                                    Yahoo
                            </Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>

                <View style={styles.textPertanyaanStyle}>
                    <Text style={styles.textPertanyaan}>Belum punya akun Tokopedia?</Text>
                    <Text style={styles.textDaftar}>Daftar</Text>
                </View>

            </View>
        );
    }
}

const styles = {
    container: {
        padding: 20
    },
    inputEmailText: {
        top: 10
    },
    bottomStyle: {
        borderBottomColor: '#00FFFF',
        borderBottomWidth: 2,
        bottom: 10
    },
    inputStyle: {
        fontSize: 17,
        right: 5,
        top: 10
    },
    buttonStyle: {
        height: 50,
        backgroundColor: "#00FFFF",
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center"

    },
    buttonStyleGoogle: {
        height: 50,
        backgroundColor: "white",
        borderRadius: 3,
        flexDirection: "row"
    },
    buttonStyleFacebook: {
        height: 50,
        backgroundColor: "white",
        borderRadius: 3,
        flexDirection: "row",
    },
    buttonStyleYahoo: {
        height: 50,
        backgroundColor: "white",
        borderRadius: 3,
        flexDirection: "row"
    },
    textButton: {
        fontSize: 15,
        color: 'white',
        fontWeight: "bold"
    },
    textButtonLain: {
        color: "black",
        fontWeight: "400",
    },
    pilihanStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 30
    },
    garisKiriKanan: {
        borderBottomWidth: 0.3,
        paddingStart: 70
    },
    textPertanyaanStyle: {
        flexDirection: "row",
        paddingTop: 20,
        justifyContent: "center"
    },
    imageStyleFacebook: {
        height: 30,
        width: 20
    },
    imageStyle: {
        height: 22,
        width: 20
    },
    imagePoisition: {
        alignItems: "center",
        justifyContent: "center",
        paddingStart: 10
    },
    textPosition: {
        justifyContent: "center",
        alignItems: 'center',
        paddingStart: 80
    },
    textPertanyaan: {
        fontSize: 12,
    },
    textDaftar: {
        fontSize: 12,
        color: "#00FFFF",
        paddingStart: 5
    }
}

export default LoginForm;