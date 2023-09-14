import React, { useRef } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { DrawerLayout } from 'react-native-gesture-handler';
import DrawerMenu from '../layout/DrawerMenu';
import CardStyle8 from '../components/card/CardStyle8';
import { COLORS, FONTS, IMAGES } from '../constants/theme';
import SearchBar3 from '../components/Search/SearchBar3';
import { GlobalStyleSheet } from '../constants/StyleSheet';
import CardStyle1 from '../../app/components/card/CardStyle3'

const Home = (props) => {
    
    const {colors} = useTheme();
    const drawerRef = useRef();

   
    return (
        <>
            <DrawerLayout
                ref={drawerRef}
                drawerWidth={280}
                drawerPosition={DrawerLayout.positions.Left}
                drawerType="front"
                drawerBackgroundColor="#ddd"
                renderNavigationView={() => <DrawerMenu drawer={drawerRef}/>}
            >
                <SafeAreaView
                    style={{
                        flex:1,
                        backgroundColor:colors.background2,
                    }}
                >
                    <View
                        style={{
                            flexDirection:'row',
                            alignItems:'center',
                            paddingHorizontal:15,
                            paddingVertical:5,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => props.navigation.openDrawer()}
                            style={{
                                padding:12,
                                marginRight:5,
                                marginLeft:-8,
                            }}
                        >
                            <FeatherIcon size={20} color={colors.title} name='menu'/>
                        </TouchableOpacity>
                        <Text style={{...FONTS.h5,color:colors.title,flex:1,top:1}}>Home</Text>
                        <View
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                                width:140,
                            }}
                        >
                            <FeatherIcon style={{marginRight:4}} size={14} color={colors.text} name='map-pin'/>
                            <Text style={{...FONTS.font,color:colors.text}} numberOfLines={1}>Rama krishnaPuram sector-b</Text>
                        </View>
                    </View>
                   
                    <ScrollView contentContainerStyle={{paddingBottom:80}}>
                        <View
                            style={GlobalStyleSheet.container}
                        >
                            {/* the cards that show summaries */}
                            <ScrollView contentContainerStyle={{flexDirection:'row'}} >
    
                           
                         <CardStyle1 />
                        <CardStyle1 />
                         <CardStyle1 />
                       <CardStyle1 />
                          
                           </ScrollView>
                        </View>
                       
                    </ScrollView>
                    {/* transactions,orders,purchase */}
                    
                </SafeAreaView>
            </DrawerLayout>
        </>
    );
};


export default Home;