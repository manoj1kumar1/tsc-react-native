import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearProfileResponse, profileUpdate } from "../store/slices/updateProfileSlice";


const Step2 = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();
    const profileData = useSelector((state) => state.profileUpdate.data);
    console.log('Step2',  profileData.length);

    useEffect(() => {
        dispatch(profileUpdate());
    }, []);

    const GoToNext = () => {
        dispatch(clearProfileResponse());
        navigation.navigate('Step3');
    }

    const GoBack = () => {
        navigation.navigate('Step1');
    }

    return(
        <View style={{display: 'flex', flex:1, backgroundColor:'white', justifyContent: 'space-around' }}>
            <View style={{rowGap: 20, marginHorizontal: 50}}>
                <Text style={{fontSize:20, textAlign: 'center'}}>Step 2</Text>
                <Button onPress={() => GoToNext()} title="Go Next" />
                <Button onPress={() => GoBack()} title="Go Back" />
            </View>
        </View>
    )
}

export default Step2;