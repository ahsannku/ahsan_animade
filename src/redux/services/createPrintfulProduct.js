import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { appConstants } from "../../config/appConstants";

export const createPrintfulProduct = createAsyncThunk(
  "printful/createPrintfulProduct",

  async (productData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const globalState = thunkAPI.getState((state) => state);
console.log("thunk triggered wit data =======>.", productData)
    try {
      console.log("create asycthunk triggered");
      const apiKey = "LopiyGl5DtxegvVvSmvWWoiSMy4bGnnUQhX2eDNX"
      const newApiKey = appConstants.printfulApiKey;
      const response = await axios.post(
        `https://api.printful.com/store/products?store_id=${appConstants.printfulStoreId}`,
        productData,
        {
          headers: {
            Authorization: `Bearer ${newApiKey}`,
          },
        }
      );

      console.log("thunk completed =======>.")

      console.log("response.data =======>.", response.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
