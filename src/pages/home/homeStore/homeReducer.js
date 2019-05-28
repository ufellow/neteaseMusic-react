import * as actionTypes from '../../../store/actionTypes'
import axios from 'axios';
const defaultState = {
    appName: '网易云音乐仿',
    num: 1
}
const GetBannerAction = (bannerList) =>{
    return {
        type:actionTypes.GET_BANNER,
        bannerList
    }
}
export const GetBannerList = () =>{
    return(
        (dispatch) =>{
            dispatch(GetBannerAction(['123']))
        }
    )
}
export const HomeReducer = (state = defaultState, action) =>{
        switch(action.type){
            case actionTypes.GET_BANNER:
                let newState = JSON.parse(JSON.stringify(state));
                newState.bannerList = action.bannerList;
                    return newState;
            default: 
                return defaultState;
        }
}

