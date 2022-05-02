import { btnStatusFormat, reserveStatusFormat, timeFormatting } from '../../utils/formatting';
import './ReserveItem.scss';

const ReserveItem = ({ $reserveList, item, handleSelect, handleRemove }) => {
	const { id, customer, menus, status, tables, timeReserved } = item;

	const $statusBtn = document.createElement('button');
	const $reserveItem = document.createElement('li');
	$statusBtn.className = 'statusBtn';
	$reserveItem.className = 'reserveItem';
	$statusBtn.innerHTML = btnStatusFormat(status);
	$reserveItem.innerHTML = `
		<div class='timeStatus'>
			<p>${timeFormatting(timeReserved)}</p>
			<span class=${status === 'seated' ? 'seated' : 'reserve'}>${reserveStatusFormat(status)}</span>
		</div>
		<div class='itemInfo'>
			<p class='ellipsis'>${customer.name} - ${tables.map(table => ` ${table.name}`)}</p>
			<p>성인 ${customer.adult} 아이 ${customer.child}</p>
			<p class='ellipsis'>
				${menus.map(menu => ` ${menu.name}(${menu.qty})`)}
			</p>
		</div>
	`;

	$statusBtn.addEventListener('click', e => {
		e.stopPropagation();
		e.target.innerText === '착석' ? (e.target.innerText = '퇴석') : handleRemove(id);
	});

	$reserveItem.addEventListener('click', () => {
		handleSelect(id);

		if (document.documentElement.clientWidth < 1024) {
			const $detail = document.querySelector('.detailContainer');
			const $mask = document.querySelector('.mask');

			$mask.style.display = 'block';
			$detail.style.display = 'block';
			$detail.style.animation = 'fadeUp 0.2s ease-out';
		}
	});

	$reserveItem.appendChild($statusBtn);
	$reserveList.appendChild($reserveItem);
};

export default ReserveItem;
