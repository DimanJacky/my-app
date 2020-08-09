import React, {Component} from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'

import './app.css'

import styled from 'styled-components'

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

const StyedAppBlock = styled(AppBlock)`
    background-color: grey;
`

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, like: false, id: 1},
                {label: 'This is so good', important: false, like: false, id: 2},
                {label: 'I need a break...', important: false, like: false, id: 3},
            ]
        } 
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this)

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id )
            
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleProperty(id, property) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const old = data[index]
            const newItem = {...old, [property]: !old[property]}

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.onToggleProperty(id, 'important');
    }

    onToggleLiked(id) {
        this.onToggleProperty(id, 'like');
    }
    
    render() {
        const {data} = this.state
        
        const liked = data.filter(item => item.like).length
        const allPosts = data.length

        return (
            <AppBlock>
                <AppHeader 
                    liked={liked}
                    allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={(id) => this.deleteItem(id)}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                    />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </AppBlock>
        )
    }

    
}