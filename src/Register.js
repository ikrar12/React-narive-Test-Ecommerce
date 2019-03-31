import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';


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
                            Daftar
                        </Text>
                    </View>
                </TouchableHighlight>
                <View style={{}}></View>

                <View style={styles.pilihanStyle}>
                    <View style={styles.garisKiriKanan} />
                    <Text>atau masuk dengan </Text>
                    <View style={styles.garisKiriKanan} />
                </View>

                <TouchableHighlight>
                    <View style={{paddingTop:20}}>
                    <View style={styles.buttonStyleGoogle}>
                        <Text style={styles.textButtonLain}>
                            Google
                        </Text>
                    </View>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight>
                    <View style={{paddingTop:15}}>
                    <View style={styles.buttonStyleFacebook}>
                        <Text style={styles.textButtonLain}>
                            Facebook
                        </Text>
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
        borderBottomColor: 'green',
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
        backgroundColor: "green",
        borderRadius: 3,
        justifyContent:"center",
        alignItems:"center"

    },
    buttonStyleGoogle: {
        height: 50,
        backgroundColor: "white",
        borderRadius: 3,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonStyleFacebook: {
        height: 50,
        backgroundColor: "white",
        borderRadius: 3,
        justifyContent:"center",
        alignItems:"center"
    },
    textButton:{
        fontSize:15,
        color:'white',
        fontWeight: "bold"
    },
    textButtonLain:{
        color:"black",
        fontWeight: "400"
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
    textPertanyaanStyle:{
        flexDirection:"row",
        paddingTop:20,
        justifyContent:"center"
    },
    textPertanyaan:{
        fontSize:12,
    },
    textDaftar:{
        fontSize:12,
        color:"green"
    }
}

export default LoginForm;