import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import PostAddFrom from "../PostAddFrom/PostAddFrom";
import PostList from "../PostList/PostList";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import SearchPanel from "../SearchPanel/SearchPanel";
import "./App.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: "Yunusbek Xabibullayev", important: false, like: false, id: 1 },
                { label: "Bunyodbek Xasanvoyev", important: false, like: false, id: 2 },
                { label: "Asadbek Abdullayev", important: false, like: false, id: 3 },
            ],
            term: "",
            filter: "all"
        }
        this.maxId = 4;
        this.onDeleted = this.onDeleted.bind(this);
        this.addItem = this.addItem.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onToogleImportant = this.onToogleImportant.bind(this);
        this.onToogleLiked = this.onToogleLiked.bind(this);
        this.onFilterSelect=this.onFilterSelect.bind(this);
        this.onUppadateFilter=this.onUppadateFilter.bind(this);
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }


    onDeleted = (id) => {
        // this.setState({data:this.state.data.filter(item=>item.id!==id)})
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const after = data.slice(0, index);
            const before = data.slice(index + 1);
            const newArr = [...after, ...before];
            return {
                data: newArr
            }
        })
    }

    searchPost(items, term) {
        if (items.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.label.indexOf(term) > -1;
        })
    }

    onUpdateSearch(term) {
        this.setState({ term: term })
    }

    onToogleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const oldArr = data[index];
            const newItem = { ...oldArr, important: !oldArr.important }
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    onToogleLiked(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const oldArr = data[index];
            const newItem = { ...oldArr, like: !oldArr.like }
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    onFilterSelect(items,filter){
        if (filter==="like") {
            return items.filter(item=>item.like);
        }else{
            return items;
        }
    }

    onUppadateFilter(filter){
        this.setState({filter:filter});
    }

    render() {
        const { data, term,filter} = this.state;
        const likeFilter = data.filter(item => item.like).length;
        const importantFilter = data.length;
        const visiblete =this.onFilterSelect(this.searchPost(data, term),filter);
        return (
            <div className="App">
                <AppHeader likeFilter={likeFilter} importantFilter={importantFilter} />
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter filter={filter} onUppadateFilter={this.onUppadateFilter} />
                </div>
                <PostList data={visiblete}
                    onDeleted={this.onDeleted}
                    onToogleImportant={this.onToogleImportant}
                    onToogleLiked={this.onToogleLiked}
                />
                <PostAddFrom addItem={this.addItem} />
            </div>
        );

    }
}
