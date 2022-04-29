import ReserveDetail from '../ReserveDetail/ReserveDetail';
import ReserveItem from '../ReserveItem/ReserveItem';
import './Reservations.scss';

const Reservations = ({ $main, data }) => {
	const $reserveContainer = document.createElement('div');
	$reserveContainer.className = 'reserveContainer';

	const $reserveList = document.createElement('ul');
	$reserveList.className = 'reserveList';

	data.map(item => {
		return new ReserveItem({ $reserveList, item });
	});

	$reserveContainer.appendChild($reserveList);
	new ReserveDetail({ $reserveContainer });

	$main.appendChild($reserveContainer);
};

export default Reservations;
