class Count extends React.Component {
    constructor(){
        this.state = {
            count: 0
        };
    }
    render(){
        return (
            <div>
                <h1>Count</h1>
                <h3>{this.state.count}</h3>
            </div>
        );
    }
}

ReactDOM.render(
    <Count/>,
    document.getElementById('content')
);
