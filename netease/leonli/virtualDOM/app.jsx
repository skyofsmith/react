class Count extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 0
        };
    }

    update(){
        this.setState({
            count: ++this.state.count
        });
    }

    render(){
        return (
            <div>
                <h1 onClick={this.update.bind(this)}>Count</h1>
                <h3>{this.state.count}</h3>
            </div>
        );
    }
}

ReactDOM.render(
    <Count/>,
    document.getElementById('content')
);
