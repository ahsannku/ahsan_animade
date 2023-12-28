import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { customAlert } from "../../utils/alert";

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_SERVER_API_URL}/register/`,
        JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          mobile: formData.code + formData.phonenumber,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        {
          redirect: "follow",
        }
      );
      customAlert("Registered Successfully!", "success");
      return res.data;
    } catch (error) {
      customAlert(
        "Enter a valid username. This value may contain only letters, numbers, and @/./+/-/_ characters."
      );
      console.log(error)
      return rejectWithValue(error);
    }
  }
);
