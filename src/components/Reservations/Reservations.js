import './Reservations.scss';

const Reservations = ({ $main, data }) => {
	const $listContainer = document.createElement('ul');
	$listContainer.className = 'listContainer';
	$listContainer.innerHTML = `dddd`;

	$main.appendChild($listContainer);
};

export default Reservations;
