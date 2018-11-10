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
    render(){
        return (
            <div>
                CommentList
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
