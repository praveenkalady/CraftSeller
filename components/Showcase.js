import React,{ useState,useLayoutEffect } from 'react'
import firestore from '@react-native-firebase/firestore';
import { View,ScrollView,Pressable } from 'react-native';
import { Text,Card } from 'react-native-elements';



const Showcase = () => {
    const [showcaseItems,setShowcaseItems] = useState([]);
    const [loading,setLoading] = useState(true);
    let mounted = true;
    useLayoutEffect(() =>{
        const getItems = async () => {
            const data = await firestore().collection('showcase').get();
            let datas = [];
                for(const doc of data.docs){
                    datas.push(doc.data());
                }
                setShowcaseItems(datas);
            }
            if(mounted){
                getItems();
                setLoading(false);
            }
        return () => mounted = false;
    },[])
    return (
        <View style={{flex:1}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flex: 1, flexDirection:'row'}}>
                {loading && <Text>Loading...</Text>}
                {showcaseItems?.map((item,i)=> (
                    <Pressable key={i} onPress={() =>console.log('Pressed')}>
                   <Card containerStyle={{width:320}} key={i}>
                       <Card.Title>{item.title}</Card.Title>
                       <Card.Divider/>
                       <Card.Image source={{uri:item.image}} />
                       <Card.Title style={{marginTop:18}}>{item.description}</Card.Title>
                   </Card>
                   </Pressable>
                ))}
            </ScrollView>
        </View>
    )
}

export default Showcase;
