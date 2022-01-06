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
        this.setState({keyword: ""})
    }

    
    render() {
        return (
            <div className="container my-3">
                <form onSubmit={this.formOnSubmit}>
                    <div className="input-group">
                        <input type="text" value={this.state.keyword} onChange={this.inputOnChange} className="form-control"/>
                        <div className="input-group-append">
                            <button type="submit" className='btn btn-primary'>Search</button>
                        </div>
                    </div>
                </form>
                {this.props.showClearButton && <button className="btn btn-outline-danger btn-sm mt-2 w-100" onClick={this.props.clearUsers}><strong>CLEAR</strong></button>}
            </div>
        )
    }
}

export default Search
