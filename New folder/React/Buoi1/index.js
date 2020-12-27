// let name = "Peter"

// let mydiv = ( 
// <div>
//     <h3 > Hello: { name } </h3> 
//     <p> Lorem.... </p>
//     <p> text </p>
// </div> )
// ReactDOM.render(mydiv, document.getElementById("app"))

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>Hello</h3>
                <p>Lỏrem</p>
            </div>
        )
    }
}
// state
class Clock extends React.Component {
    constructor() {
        super();
        this.state = { timer: new Date().toLocaleTimeString() }
        this.run()
    }
    run = () => {
        setInterval(() => {
            this.setState({
                timer: new Date().toLocaleTimeString()
            });
        }, 1000)
    }
    render() {
        return (
            <div>
                <h3>
                    Clock
                </h3>
                <p>Timer: {this.state.timer}</p>
            </div>
        )
    }
}
ReactDOM.render(<Clock />, document.getElementById("app"))