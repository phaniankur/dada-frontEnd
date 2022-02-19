import axios from "axios";
import { MONTH_TOTAL_FAIL, MONTH_TOTAL_REQUEST, MONTH_TOTAL_SUCCESS, SAVE_DAYSALE_FAIL, SAVE_DAYSALE_REQUEST, SAVE_DAYSALE_SUCCESS } from "./baseConstant";

export const saveDaySaleAction = (formData) => async (dispatch) => {
	try {
		dispatch({ type: SAVE_DAYSALE_REQUEST });

		//const { data } = await axios.post('http://localhost:5050/api/daily', formData);
		const { data } = await axios.post('https://dadabackend.herokuapp.com/api/daily', formData);

		dispatch({
			type: SAVE_DAYSALE_SUCCESS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: SAVE_DAYSALE_FAIL,
			payload: err.message
		});
	}
};
export const monthTotalAction = (formData) => async (dispatch) => {
	try {
		dispatch({ type: MONTH_TOTAL_REQUEST });

		//const { data } = await axios.get('http://localhost:5050/api/total');
		const { data } = await axios.post('https://dadabackend.herokuapp.com/api/total', formData);

		dispatch({
			type: MONTH_TOTAL_SUCCESS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: MONTH_TOTAL_FAIL,
			payload: err.message
		});
	}
};