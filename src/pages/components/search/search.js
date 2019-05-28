import styled from 'styled-components'
export const SearchBox = styled.div`
    display: flex;
    flex-direction: row;
    background: #d43b33;
    height: 60px;
    align-items: center;
    .cancel{
        padding: 20px;
        color: #fff;
    }
`;
// 输入框
export const InputBox = styled.div`
    flex: 1;
    input {
        margin: 5px 10px;
        border: none;
        padding: 10px;
        border-radius: 20px;
    }
`;