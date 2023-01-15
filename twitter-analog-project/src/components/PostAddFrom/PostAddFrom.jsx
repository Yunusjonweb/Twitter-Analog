import "./PostAddFrom.css";
import React from "react";
export default class PostAddFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
        this.onSumbit = this.onSumbit.bind(this);
    }

    inputValue = (e) => {
        this.setState({ text: e.target.value });
    }

    onSumbit() {
        if (this.state.text) {
            this.props.addItem(this.state.text);
            this.setState({ text: "" })
        } else if (this.state.text == "") {
            alert("Ma'lumot kirting")
        }
    }

    render() {
        return (
            <div className="PostAddFrom">
                <form className="bottom-panel d-flex">
                    <input
                        type="text"
                        placeholder="What are you thinking about?"
                        className="form-control new-post-label"
                        value={this.state.text}
                        onChange={this.inputValue}
                        name="text"
                    />
                    <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={this.onSumbit}>
                        Add Post
                    </button>
                </form>
            </div>
        )
    }
}