import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearProfileResponse, profileUpdate } from "../store/slices/updateProfileSlice";

const Home = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const profileData = useSelector((state) => state.profileUpdate.data);
    console.log('Home',  profileData.length);

    useEffect(() => {
        dispatch(profileUpdate());
    }, []);

    const GoToNext = () => {
        dispatch(clearProfileResponse());
        navigation.navigate('Step1');
    }

    return(
        <View style={{display: 'flex', flex:1, backgroundColor:'white', justifyContent: 'space-around' }}>
            <View style={{rowGap: 20, marginHorizontal: 50}}>
                <Text style={{fontSize:20, textAlign: 'center'}}>This is Home Screen</Text>
                <Button onPress={() => GoToNext()} title="Go to Step 1" />
            </View>
        </View>
    )
}

export default Home;