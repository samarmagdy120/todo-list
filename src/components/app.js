import React,{Component} from 'react';
import ShowItem from './showitem/showitem';
import AddItem from './additem/additem';




class App extends Component{
    state={
        items:[
            {id:1 , name:"hamza" , age:18},
            {id:2 , name:"samar" , age:20},
            {id:3 , name:"ahmed" , age:30}

        ]
    }

    deleteitem = (id) =>{
let items= this.state.items.filter(
    item => {
        return item.id !== id
    }
)
this.setState({items})
    }

    addItem = (item) =>{
        item.id=Math.random();
        let items = this.state.items;
        items.push(item);
        this.setState({items:items})
    }

    render(){
        return(
            <div className="App container">
                <h1 className="text-center">Todo List</h1>
            <ShowItem items={this.state.items} deleteitem={this.deleteitem}/>
            <AddItem addItem={this.addItem}/>
            </div>

        )
    }
}
export default App;