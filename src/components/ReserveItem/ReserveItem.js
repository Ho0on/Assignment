import { btnStatusFormat, reserveStatusFormat, timeFormatting } from '../../utils/formatting';
import './ReserveItem.scss';

const ReserveItem = ({ $reserveList, item, handleSelect, handleRemove }) => {
	const { id, customer, menus, status, tables, timeReserved } = item;
	const $reserveItem = document.createElement('li');
	$reserveItem.className = 'reserveItem';
	$reserveItem.innerHTML = `
		<div class='timeStatus'>
			<p>${timeFormatting(timeReserved)}</p>
			<span>${reserveStatusFormat(status)}</span>
		</div>
		<div class='itemInfo'>
			<p class='ellipsis'>${customer.name} - ${tables.map(table => ` ${table.name}`)}</p>
			<p>성인 ${customer.adult} 아이 ${customer.child}</p>
			<p class='ellipsis'>
				${menus.map(menu => ` ${menu.name}(${menu.qty})`)}
			</p>
		</div>
	`;

	const $statusBtn = document.createElement('button');
	$statusBtn.className = 'statusBtn';
	$statusBtn.innerHTML = btnStatusFormat(status);
	$reserveItem.appendChild($statusBtn);

	$statusBtn.addEventListener('click', e => {
		e.stopPropagation();
		e.target.innerText === '착석' ? (e.target.innerText = '퇴석') : handleRemove(item.id);
	});

	$reserveItem.addEventListener('click', () => handleSelect(item.id));

	$reserveList.appendChild($reserveItem);
};

export default ReserveItem;
