import React from "react";
import "./SearchPanel.css";
export default class SearchPanel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:""
        }
        this.onUpdateSearch=this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e){
        const term=e.target.value;
        this.setState({term:term})
        this.props.onUpdateSearch(term)
    }


    render(){
        return(
            <div className="PostAddFrom d-flex">
                <input className="input form-control"
                value={this.state.term}
                onChange={this.onUpdateSearch}
                />
            </div>
        )
    }
}