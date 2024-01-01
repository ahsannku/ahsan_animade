import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { appConstants } from "../../config/appConstants";

export const getPrintfulproduct = createAsyncThunk(
  "printful/getPrintfulproduct",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const token = thunkAPI.getState().auth.token;

    try {
      const { data } = await axios.get(
        `https://animade-production.up.railway.app/get_all_products/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
