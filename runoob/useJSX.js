var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
var arr = [
    <h1>菜鸟教程</h1>,
    <h2>学的不仅是技术，更是梦想！</h2>,
];
ReactDOM.render(
    <div>
        {/*注释...*/}
        {arr}
        <h1 style={myStyle}>Hello, world! {1+1}</h1>
    </div>,
  document.getElementById('example')
);
