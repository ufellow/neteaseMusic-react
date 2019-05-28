let getScreen = () => {
    let screenParams = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    }
    return screenParams;
}
let timeTransform = (time) => {
    let msg = '';
    let result = '';
    if(time <= 0){
        msg = '出错'
    } else {
        result = time/60+'';
       let  min = time%60;
        if(min == 0){
            
        }
    }
}
export default {
    'getScreen':getScreen,
    'timeTransform': timeTransform
}