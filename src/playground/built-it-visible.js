console.log('app is running!');

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleButton = this.handleButton.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleButton() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {

        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleButton}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Some Details!!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let visibility = false;

// let btnTitle = 'Show Details';
// const handleButton = () => {
//     visibility = !visibility;
//     renderDom();

// };


// const renderDom = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={handleButton}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//             {visibility && (
//                 <div>
//                     <p>Some Details!!</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// renderDom();





