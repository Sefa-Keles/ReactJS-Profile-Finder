import React, {useState, useContext} from 'react'
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';


const Search = () => {
    const [keyword, setKeyword] = useState('');
    const {searchUser, clearUsers, users} = useContext(GithubContext);
    const {showAlert} = useContext(AlertContext);
    
    const inputChange = (e) =>{
        setKeyword(e.target.value);
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        if(keyword ===""){
            showAlert("Please enter a keyword!", "danger")
        }else{
            searchUser(keyword);
            setKeyword("");
        }
        
    }

    return (
        <div className="container my-3">
            <form onSubmit={formSubmit}>
                <div className="input-group">
                    <input type="text" value={keyword} onChange={inputChange} className='form-control'/>
                    <div className="input-group-append">
                        <button type="submit" className='btn btn-primary'>Search</button>
                    </div>
                </div>
            </form>
            {users.length > 0 && <button onClick={clearUsers} className="btn btn-secondary btn-sm btn-block mt-2">Clear Result</button>}
        </div>
    )
}

export default Search