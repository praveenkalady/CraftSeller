import React,{ useState,useLayoutEffect } from 'react'
import firestore from '@react-native-firebase/firestore';
import { View,ScrollView} from 'react-native';
import { Text,Card,Button } from 'react-native-elements';



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
                   <Card containerStyle={{width:320}} key={i}>
                       <Card.Title>{item.title}</Card.Title>
                       <Card.Divider/>
                       <Card.Image source={{uri:item.image}} />
                       <Button style={{marginTop:10}} title="Explore"/>
                       <Card.Title>{item.description}</Card.Title>
                   </Card>
                ))}
            </ScrollView>
        </View>
    )
}

export default Showcase;
