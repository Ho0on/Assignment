import './ReserveItem.scss';

const ReserveItem = ({ $reserveList, item }) => {
	const { id, customer, menus, status, tables, timeReserved } = item;
	const $reserveItem = document.createElement('li');
	$reserveItem.className = 'reserveItem';
	$reserveItem.innerHTML = `
		<span class='timeStatus'>${timeReserved}<br>${status}</span>
		<div class='itemInfo'>
			<p>${customer.name} - ${tables.name}</p>
			<p>성인 ${customer.adult} 아이 ${customer.child}</p>
			<p>${menus.map(menu => {
				return `<span> ${menu.name}(${menu.qty})</span>`;
			})}</p>
		</div>
		<button class='statusBtn'>dodo</button>
	`;

	$reserveList.appendChild($reserveItem);
};

export default ReserveItem;
