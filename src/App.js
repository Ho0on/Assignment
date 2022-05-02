import Reservations from './components/Reservations/Reservations.js';
import { getAPI } from './utils/getAPI.js';
import './style/reset.scss';
import './style/common.scss';

const App = ({ $target }) => {
	const $main = document.createElement('div');
	$main.className = 'main';
	$main.innerHTML = `<h1 class='header'>예약 목록</h1>`;
	const $mask = document.createElement('div');
	$mask.className = 'mask';

	const reservationView = async () => {
		const data = await getAPI('https://frontend.tabling.co.kr/v1/store/9533/reservations');

		new Reservations({ $main, data });
	};

	reservationView();
	$target.appendChild($mask);
	$target.appendChild($main);
};

export default App;
