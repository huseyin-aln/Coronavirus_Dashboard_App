import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  covidList: [],
  loading: true,
};

export const getCovidData = createAsyncThunk(
  "covid/getCovidData",

  async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const url = `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats/?rapidapi-key=${API_KEY}#downloadJSON=true`;

    try {
      const { data } = await axios.get(url);
      return data.data.covid19Stats;
    } catch (err) {
      return err;
  }
});

const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    clearCovidList: (state) => {
      state.covidList = [];
    },
  },

  extraReducers: {
    [getCovidData.pending]: (state, action) => {
      state.loading = true;
    },
    [getCovidData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.covidList = payload;
    },
    [getCovidData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { clearCovidList } = covidSlice.actions;

export default covidSlice.reducer;
