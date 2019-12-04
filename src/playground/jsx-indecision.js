
console.log('app.js is running!');


// JSX - Javascript XML


const app = {
    title: 'Indecision App',
    subtitle: 'this is the subtitle',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderForm();
    }
}

const appRoot = document.getElementById('app');

const onMakeDecision = () => {
    const rand = Math.floor(Math.random() * app.options.length);
    const option = app.options[rand];
    alert(option);
};


const removeOptionsList = () => {
    app.options = [];
    renderForm();
}

const renderForm = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ?
                <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
                </ol>
                : 'No options'}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeOptionsList}>Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button> 
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);

};

renderForm();

