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

    //The state of entering a character in the input
    inputOnChange(e){
        this.setState({
            keyword: e.target.value
        })
    }

    //Status of submitting the form
    formOnSubmit(e){
        e.preventDefault();
        //Alert in case the input is submitted empty
        if(this.state.keyword===""){
            this.props.setAlert("Please Enter A Keyword!", "warning")
        }else{
            this.props.searchUser(this.state.keyword);
            this.setState({keyword: ""})
        }
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
                {/*Removing the clear button when the page is blank*/}
                {this.props.showClearButton && <button className="btn btn-outline-danger btn-sm mt-2 w-100" onClick={this.props.clearUsers}><strong>CLEAR</strong></button>}
            </div>
        )
    }
}

export default Search
