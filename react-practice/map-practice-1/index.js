var React = require('React');

// Parent component
class FriendsContainer extends React.Component {
    render() {
        var name = 'Kevin Lai';
        var friends = ['Omar', 'Takuya', 'Alex', 'Richard'];
        return (
            <div>
                <h3> Name: {name}</h3>
                <ShowList names={friends} />
            </div>

        )
    }
}

// Child Component
class ShowList extends React.Component {
    render() {
        return (
            <div>
                <h3> Friends </h3>
                <ul>{this.props.names.map(function (friend) {
                    return <li>{friend}</li>
                })}
                </ul>
            </div>
        )
    }
}