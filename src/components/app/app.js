import React, {Component} from "react";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {label: 'Complete the study of React', important: true, id: 'weqe'},
                {label: 'Perform a test task', important: false, id: 'dfs'},
                {label: 'Create React-miracles...', important: false, id: 'rhr'}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        console.log(body);
    }

    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data} 
                    onDelete={this.deleteItem}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </AppBlock>
        )
    }

}
