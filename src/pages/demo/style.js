import styled from 'styled-components'
export const Demo = styled.div`
    $height:20px;
    $width:20p;
    width: $width*2;
    height: $height*2;
    background-color: purple;
    .inner{
        width: $width;
        height:$height;
        background-color: pink;
    }
`;