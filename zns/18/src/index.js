console.log('hello world!');

const React = require('React');

class Test extends React.Component {
    constructor(...args){
        super(...args);
        this.state = {
            value: ''
        };
    }

    fn(){
        this.setState({
            value: this.refs['txt1'].value
        });
    }

    render(){
        return <div>
            <input ref="txt1" type="text" onChange={this.fn.bind(this)} />
            <span>{this.state.value}</span>
        </div>;
    }
}
