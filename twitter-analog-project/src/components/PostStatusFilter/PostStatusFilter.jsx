import React from "react";
import "./PostStatusFilter.css";
export default class PostStatusFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            button:[
                {name:"all",label:"All"},
                {name:"like",label:"Liked"}
            ]
        }
    }
    render() {
        const classNames=this.state.button.map(({name,label})=>{
            const active=this.props.filter===name;
            const classActive=active?"btn btn-info":"btn btn-outline-secondary"
            return (
                <button key={name} type="button" className={classActive} onClick={()=>this.props.onUppadateFilter(name)}>
                    {label}
                </button>
            )
        })
        return (
            <div className="btn-group">
                {classNames}
            </div>
        )
    }
}