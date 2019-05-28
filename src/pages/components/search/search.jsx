import React, {Component} from 'react';
import {SearchBox, InputBox} from './search.js'
class Search extends Component {
    render() {
        return(
                <SearchBox>
                    <InputBox>
                        <input type='text' placeholder='搜索音乐、歌词、电台'></input>
                    </InputBox>
                    <div className='cancel'>取消</div>
                </SearchBox>
                
        );
    }
}
export default Search;