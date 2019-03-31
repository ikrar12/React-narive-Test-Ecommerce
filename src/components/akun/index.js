import React from 'react';
import { View, ScrollView } from 'react-native';
import LoginForm from '../../LoginForm';
import Header from '../../components/common/Header'

class Akun extends React.Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <Header tulistext="Masuk" />
                    <LoginForm />
                </View>
            </ScrollView>
        );
    }
}

export default Akun