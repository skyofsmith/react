class Comment extends React.Component {
    render(){
        return (
            <div>
                {this.props.author}
                <div>{this.props.children}</div>
            </div>
        );
    }
}
class CommentForm extends React.Component {
    render(){
        return (
            <div>
                CommentForm
            </div>
        );
    }
}
class CommentList extends React.Component {
    constructor(){
        super();
        this.state = {
            list: []
        };
        setInterval(()=>{
            console.log('setState');
            this.setState({
                list: [1, 2, 3]
            });
        }, 3000);
    }
    render(){
        var listDOM = this.state.list.map((n) => {
            return <li>{n}</li>;
        });

        return (
            <div>
                CommentList:
                <ul>
                    {listDOM}
                </ul>
            </div>
        );
    }
}
class CommentBox extends React.Component {
    render(){
        return (
            <div className="content-box">
                Conment Box!
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
}

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);
