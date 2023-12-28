import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { appConstants } from "../../config/appConstants";

export const getSinglePrintfulProduct = createAsyncThunk(
  "printful/getSinglePrintfulProduct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const globalState = thunkAPI.getState((state) => state);
    const newApiKey = appConstants.printfulApiKey

    try {
      const { data } = await axios.get(
        `https://api.printful.com/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${newApiKey}`,
          },
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
