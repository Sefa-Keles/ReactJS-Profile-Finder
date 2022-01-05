import React, { Component } from 'react'

export class Search extends Component {
    constructor(props){
        super(props);
        this.inputOnChange = this.inputOnChange.bind(this);
        this.formOnSubmit = this.formOnSubmit.bind(this);
        this.state = {
            keyword: ""
        }
    }

    inputOnChange(e){
        this.setState({
            keyword: e.target.value
        })
    }
    formOnSubmit(e){
        e.preventDefault();
        this.props.searchUser(this.state.keyword);
    }
    

    render() {
        return (
            <form onSubmit={this.formOnSubmit}>
                <div className="container my-3">
                    <div className="input-group">
                        <input type="text" value={this.state.keyword} onChange={this.inputOnChange} className="form-control"/>
                        <div className="input-group-append">
                            <button type="submit" className='btn btn-primary'>Search</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Search
