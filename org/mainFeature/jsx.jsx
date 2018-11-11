const el = <h1>Hello, world!</h1>;

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
console.log(element);

ReactDOM.render(
  element,
  document.getElementById('root')
);
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const el2 = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  el2,
  document.getElementById('after')
);

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const element3 = <div tabIndex="0"></div>;

const element4 = <img src={user.avatarUrl}></img>;

const element5 = <img src={user.avatarUrl} />;

const element6 = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);

const element7 = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);

//babel transform that to this
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);
