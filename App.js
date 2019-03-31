import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import Home from './src/components/home';
import Feed from './src/components/feed';
import Inbox from './src/components/inbox';
import HalamanKeranjang from './src/components/keranjang';
import Akun from './src/components/akun';

import akun from './src/asset/akun.png';
import feed from './src/asset/feed.png';
import house from './src/asset/house.png';
import keranjang from './src/asset/keranjang.png';
import inbox from './src/asset/inbox.png';



class App extends React.Component {
    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Route exact path="/" component={Home} />
                    <Route path="/Feed" component={Feed} />
                    <Route path="/Inbox" component={Inbox} />
                    <Route path="/Keranjang" component={HalamanKeranjang} />
                    <Route path="/Akun" component={Akun} />



                    <View style={styles.nav}>

                        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
                            <View style={{ alignItems: "center" }}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={house}
                                />
                                <Text style={{ fontSize: 10.6 }}>Home</Text>
                            </View>
                        </Link>

                        <Link to="/Feed" underlayColor="#f0f4f7" style={styles.navItem}>
                            <View style={{ alignItems: "center" }}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={feed}
                                />
                                <Text style={{ fontSize: 10.60, }}>Fedd</Text>
                            </View>
                        </Link>

                        <Link to="/Inbox" underlayColor="#f0f4f7" style={styles.navItem}>
                            <View style={{ alignItems: "center" }}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={inbox}
                                />
                                <Text style={{ fontSize: 10.60, }}>Inbox</Text>
                            </View>
                        </Link>

                        <Link to="/Keranjang" underlayColor="#f0f4f7" style={styles.navItem}>
                            <View style={{ alignItems: "center" }}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={keranjang}
                                />
                                <Text style={{ fontSize: 10.60, }}>Keranjang</Text>
                            </View>
                        </Link>

                        <Link to="/Akun" underlayColor="#f0f4f7" style={styles.navItem}>
                            <View style={{ alignItems: "center" }}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={akun}
                                />
                                <Text style={{ fontSize: 10.6, }}>Akun</Text>
                            </View>
                        </Link>
                    </View>

                </View>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    header: {
        flex: 1,
        fontSize: 20,
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "white"
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    subNavItem: {
        padding: 5
    },
    topic: {
        textAlign: "center",
        fontSize: 15
    }
});

export default App;
