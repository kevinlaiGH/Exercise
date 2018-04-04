var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
    name: 'Kevin Lai',
    img: 'https://avatars1.githubusercontent.com/u/23046844?s=460&v=4',
    username: 'kevinlaiGH'
}

class Badge extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.user.img} />
                <h1>Name: {this.props.user.name} </h1>
                <h3>username: {this.props.user.username} </h3>
            </div>
        )
    }
}
// we are passing a user prop, user is just an object that has name, img, username
ReactDOM.render(
    <Badge user={USER_DATA} />,
    document.getElementById('app')
);