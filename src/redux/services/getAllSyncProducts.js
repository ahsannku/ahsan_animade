import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { appConstants } from "../../config/appConstants";

export const getAllSyncProducts = createAsyncThunk(
  "printful/getAllSyncProducts",

  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const globalState = thunkAPI.getState((state) => state);
    try {
      const apiKey = "LopiyGl5DtxegvVvSmvWWoiSMy4bGnnUQhX2eDNX";
      const newApiKey = appConstants.printfulApiKey;
      const response = await axios.get(
        "https://api.printful.com/store/products",       
        {
          headers: {
            Authorization: `Bearer ${newApiKey}`,
            "X-PF-Store-Id": appConstants.printfulStoreId,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
