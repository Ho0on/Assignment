import axios from 'axios';

export const getAPI = async () => {
	try {
		const { data } = await axios.get('https://frontend.tabling.co.kr/v1/store/9533/reservations');

		return data.reservations;
	} catch (error) {
		throw Error(error);
	}
};
