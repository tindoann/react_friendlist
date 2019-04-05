import React from 'react' 
import ReactDOM from 'react-dom'; 

// set the initial state of the component 
class AddFriend extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newFriend: ''
    }

    // bind the event handlers 
    this.updateNewFriend = this.updateNewFriend.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
  }

  // the target event property returns the element that triggered the event.
  updateNewFriend(e) {
    this.setState({
      newFriend: e.target.value
    })
  }
  handleAddNew() {
    this.props.addNew(this.state.newFriend)
    this.setState({
      newFriend: ''
    })
  }
  render() {
    return (
      <div>
        <input type='text' value={this.state.newFriend} onChange={this.updateNewFriend} />
      </div>
    )
  }
}

// map function
class ShowList extends React.Component {
  render() {
    return (
    <div>
      <h3> Friends </h3>
      <ul>
        {this.props.names.map((friend) => {
          return <li> {friend} </li>
        })}
      </ul>
    </div>
    )
  }
}

class FriendContainer extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      name: 'Tyler', 
      friends: ['Jake', 'Sarah', 'Merrick'], 
    }

    this.addFriend = this.addFriend.bind(this)
}

addFriend(friend) {
  this.setState((state) => ({
    friends: state.friends.concat([friend])
  }))
}
render() {
  return (
    <div>
      <h3> Name: {this.state.name} </h3>
      <AddFriend addNew={this.addFriend} />
      <ShowList names={this.state.friends} />
    </div>
    )
  }
}

ReactDOM.render(<FriendsContainer />, document.getElementById('root')); 
