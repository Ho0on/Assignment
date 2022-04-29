import './ReserveDetail.scss';

const ReserveDetail = ({ $reserveContainer }) => {
	const $detailContainer = document.createElement('div');
	$detailContainer.className = 'detailContainer';
	$detailContainer.innerHTML = `
	<h3>예약 정보</h3>
		<div class='info'>
			<p><span>예약 상태</span>value</p>
			<p><span>예약 상태</span>value</p>
			<p><span>예약 상태</span>value</p>
		</div>
	<h3>고객 정보</h3>
		<div class='info'>
			<p><span>예약 상태</span>value</p>
			<p><span>예약 상태</span>value</p>
			<p><span>예약 상태</span>value</p>
			</div>	
		<p class='request'><span>예약 상태</span>value</p>
		
	`;

	$reserveContainer.appendChild($detailContainer);
};

export default ReserveDetail;
