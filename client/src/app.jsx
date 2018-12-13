import React from 'react';
import List from './list.jsx';
import axios from 'axios';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listInit: []
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.getAllItems = this.getAllItems.bind(this);
        this.editItem = this.editItem.bind(this);
        this.updateInputName = this.updateInputName.bind(this);
        this.updateInputNum = this.updateInputNum.bind(this);

    }

    componentDidMount() {
        this.getAllItems()

    }

    addItem(e) {
        e.preventDefault();
        let {playerName, playerNum} = this.state
        axios
        .post('/Players', {playerName, playerNum})
        .then(this.getAllItems)
    }

    deleteItem(id) {
        axios
        .delete(`/Players/${id}`)
        .then(this.getAllItems)
    }

    getAllItems() {
        axios
        .get('/Players')
        .then(({data}) => this.setState({listInit: data}))
        .then(console.log('sup', this.state))
        .catch(err => console.error(err))
    }

    

    editItem(id) {
        let nameChange = window.prompt('Edit Player Name')
        let numChange = window.prompt('Edit Player Number')
        axios
        .put('/Players', {playerName: nameChange, playerNum: numChange, _id: id})
        .then(this.getAllItems)
        .catch(err => console.error(err))
    }

    updateInputName(e) {
        let {value} = e.target
        this.setState({playerName: value})
    }

    updateInputNum(e) {
        let {value} = e.target
        this.setState({playerNum: value})
    }



    render() {
        return (
            <div>
            <form action = '' onSubmit = {this.addItem}>
            <input type = "text" onChange = {this.updateInputName} placeholder = "Player Name"/>
            <input type = "text" onChange = {this.updateInputNum} placeholder = "Player Number"/>
            <button>Add</button>
            </form>


            <h1>Roster</h1>

            <List  list = {this.state.listInit} deleteItem = {this.deleteItem} editItem = {this.editItem}/>

            </div>
        )
    }



}

export default App;
