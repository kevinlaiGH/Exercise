// passing props to parent then chil
var React = require('react');
var ReactDOM = require('react-dom');

class Avatar extends React.Component {
    render() {
        return (
            <img src={this.props.img} />
        )
    }
}

class Label extends React.Component {
    render() {
        return (
            <h1>Name:{this.props.name} </h1>
        )
    }
}

class ScreenName extends React.Component {
    render() {
        return (
            <h3>Username: {this.props.username}</h3>
        )
    }
}

class Badge extends React.Component {
    render() {
        return (
            <div>
                <Avatar img={this.props.user.img} />
                <Label name={this.props.user.name} />
                <ScreenName username={this.props.user.username} />
            </div>
        )
    }
}

ReactDOM.render(
    <Badge user={{
        name: 'Kevin Lai',
        img: 'https://avatars1.githubusercontent.com/u/23046844?s=460&v=4',
        username: 'kevinlaiGH'
    }} />,
    document.getElementById('app')
);