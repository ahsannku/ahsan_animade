import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { appConstants } from "../../config/appConstants";

export const getSinglePrintfulProduct = createAsyncThunk(
  "printful/getSinglePrintfulProduct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const globalState = thunkAPI.getState((state) => state);
    const newApiKey = appConstants.printfulApiKey
    const token = thunkAPI.getState().auth.token;

    try {
      const { data } = await axios.post(
        `https://animade-production.up.railway.app/get_single_product/`, {id},
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
