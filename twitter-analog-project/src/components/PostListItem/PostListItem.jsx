import React from "react";
import "./PostListItem.css";
export default class PostListItem extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         important:false,
    //         like:false
    //     }
    //     this.onImportant=this.onImportant.bind(this);
    //     this.onLiked=this.onLiked.bind(this);
    // }

    // onImportant(){
    //     this.setState(({important})=>({important:!important}));
    // }

    // onLiked(){
    //     this.setState(({like})=>({like:!like}));
    // }

    render(){
        const {label,onDeleted,onToogleImportant,onToogleLiked,important,like}=this.props;
        let classNames="app-list-item d-flex justify-content-between";
        if (important) {
            classNames +=" important";
        }

        if (like) {
            classNames +=" like";
        }

        return (
            <div className={classNames}>
                <span className="app-list-item-label" onClick={onToogleLiked}>
                    {label}
                </span>
                <div className="d-flex d-flex justify-content-between algin-items-center">
                    <button type="button"
                    className="btn-star btn-sm"
                    onClick={onToogleImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDeleted}>
                        <i className="fa fa-trash"></i>
                    </button>
                    <button className="btn-heart btn-sm"
                    >
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        )
    }
    }