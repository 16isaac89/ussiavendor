import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const BilledItem = ({title,image,price,views,likes,dateFrom,dateTo,status}) => {

    const {colors} = useTheme();

    return (
        <View
            style={{
                backgroundColor:colors.cardBg,
                borderRadius:10,
                marginBottom:18,
                borderLeftWidth:4,
                width:'100%',
                marginLeft:0,marginRight:0,
                borderColor:status === "Featured" ? COLORS.yellow : COLORS.primary5,
                ...GlobalStyleSheet.shadow,
            }}
        >
            <View
                style={{
                    paddingHorizontal:15,
                    paddingVertical:15,
                    flexDirection:'row',
                    marginLeft:0,marginRight:0,
                    width:'100%'
                }}
            >
                
                <View style={{flex:1,width:'100%'}}>
                    <View style={{ flexDirection:'row',width:'100%' }}>
                    <View style={{ flexDirection:'column',textAlign:'left' }}>
                    <Text style={{
                        ...FONTS.font,
                        fontSize:15,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}># 127 Mango</Text>
                    <Text style={{
                        ...FONTS.font,
                        fontSize:12,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>Item Subtotal</Text>
                    </View>
                    <View style={{ flexDirection:'column',marginLeft:"20%" }}>
                    <Text style={{
                        ...FONTS.font,
                        fontSize:15,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>Shs 1800000</Text>
                    <Text style={{
                        ...FONTS.font,
                        fontSize:12,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>8 Bags x 2000 = Shs 18000</Text>
                    </View>
                    </View>  
                </View>
            </View>



            <View
                style={{
                    paddingHorizontal:15,
                    paddingVertical:15,
                    flexDirection:'row',
                    marginLeft:0,marginRight:0,
                    width:'100%'
                }}
            >
                
                <View style={{flex:1,width:'100%'}}>
                    <View style={{ flexDirection:'row',width:'100%' }}>
                    <View style={{ flexDirection:'column',textAlign:'left' }}>
                    <Text style={{
                        ...FONTS.font,
                        fontSize:11,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>Total Discount: 0</Text>
                    <Text style={{
                        ...FONTS.font,
                        fontSize:11,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>Total Qty: 8 </Text>
                    </View>
                    <View style={{ flexDirection:'column',marginLeft:"20%" }}>
                    <Text style={{
                        ...FONTS.font,
                        fontSize:11,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>Total Tax:</Text>
                    <Text style={{
                        ...FONTS.font,
                        fontSize:11,
                        ...FONTS.fontBold,
                        color:colors.title,
                        marginBottom:3,
                    }}>SubTotal:</Text>
                    </View>
                    </View>  
                </View>
            </View>
        </View>
    );
};


export default BilledItem;