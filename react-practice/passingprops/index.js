class Badge extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.img} />
                <h1>Name: {this.props.name}</h1>
                <h3>username: {this.props.username} </h3>
            </div>
        )
    }
}

ReactDOM.render(
    <Badge
        name='Kevin Lai'
        username='kevinlai'
        img='https://avatars1.githubusercontent.com/u/23046844?s=460&v=4' />,
    document.getElementById('app')
);