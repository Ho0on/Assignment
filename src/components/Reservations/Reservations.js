import ReserveDetail from '../ReserveDetail/ReserveDetail';
import ReserveItem from '../ReserveItem/ReserveItem';
import './Reservations.scss';

const Reservations = ({ $main, data }) => {
	const $reserveContainer = document.createElement('div');
	$reserveContainer.className = 'reserveContainer';
	const $reserveList = document.createElement('ul');
	$reserveList.className = 'reserveList';
	const $emptyList = document.createElement('span');
	$emptyList.className = 'emptyList';
	$emptyList.innerText = '현재 예약 내역이 없습니다.';

	let filteredList = data.filter(item => item.status !== 'done');

	const renderReserveList = newData => {
		newData.map(item => {
			new ReserveItem({ $reserveList, item, handleSelect, handleRemove });
		});
	};

	const removeReserveList = parent => {
		while (parent.hasChildNodes()) {
			parent.removeChild(parent.firstChild);
		}
	};

	const removeReserveDetail = () => {
		const $detail = document.querySelector('.detailContainer');
		$reserveContainer.removeChild($detail);
	};

	const handleSelect = id => {
		const selectedData = data.find(item => item.id === id);
		removeReserveDetail();
		new ReserveDetail({ $reserveContainer, data: selectedData });
	};

	const handleRemove = id => {
		filteredList = filteredList.filter(item => item.id !== id);

		removeReserveList($reserveList);
		renderReserveList(filteredList);

		if (filteredList.length === 0) {
			removeReserveDetail();
			$reserveContainer.removeChild($reserveList);
			$reserveContainer.appendChild($emptyList);
		} else {
			removeReserveDetail();
			new ReserveDetail({ $reserveContainer, data: filteredList[0] });
		}
	};

	renderReserveList(filteredList);
	$reserveContainer.appendChild($reserveList);
	new ReserveDetail({ $reserveContainer, data: filteredList[0] });
	$main.appendChild($reserveContainer);
};

export default Reservations;
