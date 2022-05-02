import axios from 'axios';

export const getAPI = async apiAddress => {
	try {
		const { data } = await axios.get(apiAddress);
		return data.reservations;
	} catch (error) {
		throw Error(error);
	}
};
