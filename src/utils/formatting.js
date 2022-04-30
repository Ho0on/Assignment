export const timeFormatting = time => {
	const date = new Date(time);
	const hour = ('0' + date.getHours()).slice(-2);
	const minute = ('0' + date.getMinutes()).slice(-2);

	return `${hour}:${minute}`;
};

export const reserveStatusFormat = status => {
	return status === 'seated' ? '착석 중' : '예약';
};

export const btnStatusFormat = status => {
	return status === 'seated' ? '퇴석' : '착석';
};
