import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { customAlert } from "../../utils/alert";

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ username, otp }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(
        `https://animade-production.up.railway.app/verify-otp/`,
        {
          username,
          otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      customAlert("OTP Verified Successfully!", "success");
      console.log(res)
      return res.data;
    } catch (error) {
      customAlert("Invalid OTP. Please try again.", "error");
      return rejectWithValue(error);
    }
  }
);
