import ReserveDetail from '../ReserveDetail/ReserveDetail';
import ReserveItem from '../ReserveItem/ReserveItem';
import './Reservations.scss';

const Reservations = ({ $main, data }) => {
	const $reserveContainer = document.createElement('div');
	$reserveContainer.className = 'reserveContainer';
	const $reserveList = document.createElement('ul');
	$reserveList.className = 'reserveList';

	let filteredList = [...data];

	const renderReserveList = newData => {
		newData.map(item => {
			item.status !== 'done' && new ReserveItem({ $reserveList, item, handleSelect, handleRemove });
		});
	};

	const removeReserveList = parent => {
		while (parent.hasChildNodes()) {
			parent.removeChild(parent.firstChild);
		}
	};

	const handleSelect = id => {
		const $detail = document.querySelector('.detailContainer');
		$reserveContainer.removeChild($detail);

		const selectedData = data.find(item => item.id === id);

		new ReserveDetail({ $reserveContainer, data: selectedData });
	};

	const handleRemove = id => {
		removeReserveList($reserveList);
		filteredList = filteredList.filter(item => item.id !== id);
		renderReserveList(filteredList);
	};

	renderReserveList(filteredList);
	$reserveContainer.appendChild($reserveList);
	new ReserveDetail({ $reserveContainer, data: data[0] });
	$main.appendChild($reserveContainer);
};

export default Reservations;
