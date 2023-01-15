import React from "react";
import "./AppHeader.css";
export default class AppHeader extends React.Component{
    render(){
        const {likeFilter,importantFilter}=this.props;
        return(
                <div className="app-header d-flex d-flex justify-content-between">
                    <h1>Yunusbek Xabibullayev</h1>
                    <h2>{importantFilter} posts,{likeFilter} like</h2>
                </div>
        )
    }
}