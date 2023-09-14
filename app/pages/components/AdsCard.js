import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const AdsCard = ({title,image,price,views,likes,dateFrom,dateTo,status}) => {

    const {colors} = useTheme();

    return (
        <View
            style={{
                backgroundColor:colors.cardBg,
                borderRadius:10,
                marginBottom:18,
                borderLeftWidth:4,
                borderColor:status === "Featured" ? COLORS.yellow : COLORS.primary5,
                ...GlobalStyleSheet.shadow,
            }}
        >
            <View
                style={{
                    paddingHorizontal:15,
                    paddingVertical:12,
                    borderBottomWidth:1,
                    borderColor:colors.borderColor,
                }}
            >
                <Text style={{...FONTS.fontSm,...FONTS.fontBold,color:colors.textLight}}>Isaac
                    <Text style={{color:colors.text}}> {dateFrom} </Text> 
                   
                </Text>
            </View>
            <View
                style={{
                    paddingHorizontal:15,
                    paddingVertical:15,
                    flexDirection:'row',
                }}
            >
                
                <View style={{flex:1}}>
                    <Text style={{
                        ...FONTS.font,
                        fontSize:15,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>Sale 12356</Text>
                    <Text style={{...FONTS.h6,color:COLORS.primary}}>{price}</Text>
                    <View
                        style={{
                            flexDirection:'row',
                            marginTop:5,
                            justifyContent:'space-between',
                        }}
                    >
                        <View
                            style={{
                                flexDirection:'row',
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    flexDirection:'row',
                                    alignItems:'center',
                                    borderRightWidth:1,
                                    borderColor:colors.borderColor,
                                    paddingRight:10,
                                    marginRight:10,
                                }}
                            >
                                <FeatherIcon style={{marginRight:4}} color={colors.text} size={28} name='printer'/>
                             
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flexDirection:'row',
                                    alignItems:'center',
                                }}
                            >
                                <FeatherIcon style={{marginRight:4}} color={colors.text} size={28} name='share-2'/>
                                
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flexDirection:'row',
                                    alignItems:'center',
                                    left:10
                                }}
                            >
                                <MaterialCommunityIcons style={{marginRight:4}} color={colors.text} size={28} name='dots-vertical'/>
                                
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                backgroundColor:status === "Featured" ? COLORS.yellow : COLORS.primary5,
                                paddingHorizontal:10,
                                borderRadius:20,
                                paddingBottom:4,
                                paddingTop:1,
                                flexDirection:'row'
                            }}
                        >
                    
                            <Text style={{...FONTS.fontSm,...FONTS.fontBold,color:COLORS.white}}>{status}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};


export default AdsCard;