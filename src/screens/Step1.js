import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearProfileResponse, profileUpdate } from "../store/slices/updateProfileSlice";

const Step1 = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const profileData = useSelector((state) => state.profileUpdate.data);
    console.log('Step1',  profileData.length);

    useEffect(() => {
        dispatch(profileUpdate());
    }, []);

    const GoToNext = () => {
        dispatch(clearProfileResponse());
        navigation.navigate('Step2');
    }
    const GoBack = () => {
        navigation.navigate('Home');
    }

    return(
        <View style={{display: 'flex', flex:1, backgroundColor:'white', justifyContent: 'space-around' }}>
            <View style={{rowGap: 20, marginHorizontal: 50}}>
                <Text style={{fontSize:20, textAlign: 'center'}}>Step 1</Text>
                <Button onPress={() => GoToNext()} title="Go Next" />
                <Button onPress={() => GoBack()} title="Go Back" />
            </View>
        </View>
    )
}

export default Step1;