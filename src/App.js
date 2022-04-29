import Reservations from './components/Reservations/Reservations.js';
import './style/reset.scss';
import './style/common.scss';
import { getAPI } from './utils/getAPI.js';

const App = ({ $target }) => {
	const $main = document.createElement('div');
	$main.className = 'main';
	$main.innerHTML = `<h1 class='header'>예약 목록</h1>`;

	const reservationView = async () => {
		const data = await getAPI();
		new Reservations({ $main, data });
	};

	reservationView();

	$target.appendChild($main);
};

export default App;
