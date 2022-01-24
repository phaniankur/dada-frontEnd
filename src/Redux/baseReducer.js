import { MONTH_TOTAL_FAIL, MONTH_TOTAL_REQUEST, MONTH_TOTAL_RESET,
	MONTH_TOTAL_SUCCESS, SAVE_DAYSALE_FAIL, SAVE_DAYSALE_REQUEST, SAVE_DAYSALE_RESET, SAVE_DAYSALE_SUCCESS } from "./baseConstant";

export const saveDaySaleReducers = (state = {}, action) => {
	switch (action.type) {
		case SAVE_DAYSALE_REQUEST:
			return { loading: true };

		case SAVE_DAYSALE_SUCCESS:
			return { data: action.payload, loading: false };

		case SAVE_DAYSALE_FAIL:
			return { loading: false, error: action.payload };

		case SAVE_DAYSALE_RESET:
			return {};

		default:
			return state;
	}
};
export const monthTotalReducers = (state = {}, action) => {
	switch (action.type) {
		case MONTH_TOTAL_REQUEST:
			return { loading: true };

		case MONTH_TOTAL_SUCCESS:
			return { data: action.payload, loading: false };

		case MONTH_TOTAL_FAIL:
			return { loading: false, error: action.payload };

		case MONTH_TOTAL_RESET:
			return {};

		default:
			return state;
	}
};