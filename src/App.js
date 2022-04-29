import ReservationList from './components/ReservationList/ReservationList.js';

const App = ({ $target }) => {
	const $main = document.createElement('div');
	$main.className = 'mainContainer';
	$target.appendChild($main);

	new ReservationList({ $main });
};

export default App;
