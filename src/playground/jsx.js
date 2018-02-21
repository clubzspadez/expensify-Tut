var appRoot = document.getElementById('app');

let count = 0;

const app = {
	title: "Task Assigner",
	subtitle: 'We gon\' give you a task today!',
	options: []
}

const addOption = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;
	if(option){
		app.options.push(option);
		e.target.elements.option.value = '';
		renderAppTest();
	}
};

const removeList = () => {
	app.options = [];
	renderAppTest();
};

const makeChoice =() => {
	const randNum = Math.floor(Math.random() * app.options.length);
	const choice = () => {
		let currentChoice = app.options[randNum];
		return currentChoice;
	}
	return console.log(choice());
};

const renderAppTest = () => {
var templateTwo = (
    <div>
			<h1>{app.title}</h1>
			<h3>{app.subtitle}</h3>
			<p>{app.options.length > 0 ? 'Here are your options' : 'You currently have no tasks created'}</p>
			<button disabled={app.options.length === 0} onClick={makeChoice}>LET US CHOOSE FOR YOU</button>
			{}
			<button onClick={removeList}>Remove All</button>
			<ol>
				{
					app.options.map((option) => <li key={option}>{option}</li> )
				}
			</ol>
			<form onSubmit={addOption}>
				<input type="text" name="option"/>
				<button>Add Your Task!</button>
			</form>
    </div>
);  

ReactDOM.render(templateTwo , appRoot);
}

renderAppTest();