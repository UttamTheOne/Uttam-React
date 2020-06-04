import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const numVar = 8;
var text = <h1>Hello World!</h1>;
let users = [
	{
		"firstname": "Uttam",
		"lastname": "Deshani"
	},
	{
		"firstname": "Mihir",
		"lastname": "Shah"
	}
];

const user1 = () => { return (<h3>Hello, {users[0].firstname} {users[0].lastname} {numVar} </h3>); }
const user2 = <h3>Hello, {users[1].firstname} {users[1].lastname} </h3>

function printUser() {
	return (<div>
		{text}
		{user1()}
		{user2}
	</div>);
}

function tick(){

	const element = (
		<div>
				<h2>Timer : {new Date().toLocaleTimeString()}</h2>
				{printUser()}		
		</div>
	);
ReactDOM.render(element,
	document.getElementById('root')
);
}

setInterval(tick,1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

