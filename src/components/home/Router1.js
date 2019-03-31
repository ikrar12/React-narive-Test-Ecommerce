import React, {Component} from 'react';
import { Scene, Router } from 'react-native-router-flux'

import LoginForm from '../../LoginForm';
import Register from '../../Register';
import Home from './index'

export default class Routers extends Component{
    render() {
        return(
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene>
                        <Scene key="home" component={Home} hideNavBar={true}/>
                    </Scene>
                    <Scene key="Masuk">
                        <Scene 
                            style={{flex:1}}
                            component={LoginForm}
                            rightTitle="Masuk"
                        />
                    </Scene>
                    <Scene key="Daftar" component={Register} title="Daftar"/>
                </Scene>
            </Router>
        );
    }
}
