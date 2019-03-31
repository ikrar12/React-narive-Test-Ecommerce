import React from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';

import Beranda2 from './Beranda2'

import afiliasi from '../../asset/afiliasi.png';
import belanja from '../../asset/belanja.png';
import emas from '../../asset/emas.png';
import tix from '../../asset/tix.png';
import voucer from '../../asset/voucer.png';
import tiket from '../../asset/tiket.png';
import pinjam from '../../asset/pinjam.png';
import fashion from '../../asset/fashion.png';
import oficial from '../../asset/oficial.png';
import lainnya from '../../asset/lainnya.png'

import promo1 from '../../asset/promo1.jpg';
import promo2 from '../../asset/promo2.jpg';
import promo3 from '../../asset/promo3.jpg';
import captain2 from '../../asset/captain2.jpg';




class Home extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>

                <View style={{ height: 60, backgroundColor: "white" }}>
                <View>
                   <Text>Buat header</Text>
                </View>
                   
                </View>
                <ScrollView>
                    <ScrollView horizontal={true}>

                        <Image source={promo1} style={{ height: 130, width: 400, flex: 1 }}
                        />

                        <Image source={promo2} style={{ height: 130, width: 400, flex: 1 }}
                        />

                        <Image source={promo3} style={{ height: 130, width: 400, flex: 1 }}
                        />
                    </ScrollView>

                    <View style={{ height: 50, flexDirection: "row", paddingTop: 20 }}>
                        <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-around" }}>
                            <Image source={belanja} style={StyleSheet.iconStyle}
                            />

                            <Image source={tiket} style={StyleSheet.iconStyle}
                            />

                            <Image source={tix} style={StyleSheet.iconStyle}
                            />

                            <Image source={pinjam} style={StyleSheet.iconStyle}
                            />

                            <Image source={afiliasi} style={StyleSheet.iconStyle}
                            />

                        </View>
                    </View>

                    <View style={{ height: 50, flexDirection: "row" }}>
                        <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-around" }}>
                            <Image source={oficial} style={StyleSheet.iconStyle}
                            />

                            <Image source={fashion} style={StyleSheet.iconStyle}
                            />

                            <Image source={voucer} style={StyleSheet.iconStyle}
                            />

                            <Image source={emas} style={StyleSheet.iconStyle}
                            />

                            <Image source={lainnya} style={StyleSheet.iconStyle}
                            />
                        </View>
                    </View>

                    <View>
                        <Text>Captain Marvel</Text>
                        <Image source={captain2} style={{ height: 210, width: 390, }} />
                    </View>

                    <View style={{ height: 60, width: 400, backgroundColor:"white" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text>Top-up & Tagihan</Text>
                            <View>
                                <Text>Lihat Semua</Text>
                            </View>
                        </View>
                    </View>

                    <ScrollView horizontal={true}>
                    <View style={{flexDirection:"row"}} >
                        <View style={{height:60, width:110, backgroundColor:"#7FFF00", borderRadius: 15, }} >
                            <Text>For You</Text>
                        </View>

                        <View style={{height:60, width:110, backgroundColor:"#FF4500", borderRadius: 15, }}>
                            <Text>Hanpone & Tablet</Text>
                        </View>

                        <View style={{height:60, width:110, backgroundColor:"blue", borderRadius: 15,  }}>
                            <Text>Rumah Tangga</Text>
                        </View>

                        <View style={{height:60, width:110, backgroundColor:"aqua", borderRadius: 15, }}>
                            <Text>Makanan & Minuman</Text>
                        </View>
                    </View>
                    </ScrollView>
                    <Beranda2 />
                </ScrollView>
            </View>



        );
    }
}

const StyleSheet = {
    iconStyle: {
        height: 20,
        width: 20
    }
}

export default Home