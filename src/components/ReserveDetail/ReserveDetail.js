import './ReserveDetail.scss';

const ReserveDetail = ({ $reserveContainer, data }) => {
	const { status, timeReserved, timeRegistered, customer } = data;

	const $mask = document.querySelector('.mask');
	const $closeBtn = document.createElement('button');
	$closeBtn.className = 'closeBtn';
	$closeBtn.innerText = '닫기';
	const $detailContainer = document.createElement('div');
	$detailContainer.className = 'detailContainer';
	$detailContainer.innerHTML = `
	<h3>예약 정보</h3>
		<div class='info'>
			<p><span>예약 상태</span>${status}</p>
			<p><span>예약 시간</span>${timeReserved}</p>
			<p><span>접수 시간</span>${timeRegistered}</p>
		</div>
	<h3>고객 정보</h3>
		<div class='info'>
			<p><span>고객 성명</span>${customer.name}</p>
			<p><span>고객 등급</span>${customer.level}</p>
			<p>
				<span>고객 메모</span>
				<span class='memo'>${customer.memo}</span>
			</p>
			</div>	
		<p class='request'><span>요청 사항</span>${customer.request}</p>
	`;

	const closeDetail = () => {
		$detailContainer.style.display = 'none';
		$mask.style.display = 'none';
	};

	$mask.addEventListener('click', closeDetail);
	$closeBtn.addEventListener('click', closeDetail);

	$detailContainer.appendChild($closeBtn);
	$reserveContainer.appendChild($detailContainer);
};

export default ReserveDetail;
