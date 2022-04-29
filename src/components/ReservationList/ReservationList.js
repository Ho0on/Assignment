import './ReservationList.scss';

const ReservationList = ({ $main }) => {
	const $listContainer = document.createElement('ul');
	$listContainer.className = 'listContainer';
	$listContainer.innerHTML = `dddd`;

	$main.appendChild($listContainer);
};

export default ReservationList;
