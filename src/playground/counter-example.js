
console.log('app is running!');

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log('did mount!');
        try{
         
            const count = parseInt(localStorage.getItem('count'), 10);
            if(!isNaN(count)){
                this.setState(() => ({count}));
            }
        } catch(e) {
            console.log('your input is not valid!');
        }
    }

    componentDidUpdate(prevProp, prevState) {
        console.log('did update!');
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
    }
     
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    };

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    };

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    };


    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter count={10}/>, document.getElementById('app'));


// let count = 0;

// const addOne = () => {
//     console.log('addOne');
//     count++
//     renderCounterApp();
// }
// const minusOne = () => {
//     console.log(count);
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     console.log(count);
//     renderCounterApp();
// }

// let appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={minusOne}>Minus One</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);

// }

// renderCounterApp();