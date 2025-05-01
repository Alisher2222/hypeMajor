import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

export const submitBusinessForm = createAsyncThunk(
  "businessForm/submit",
  async (formData, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const user_id = state.auth.user.id;
      const token = state.auth.token;

      const response = await API.post(
        "/business/create",
        { ...formData, user_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: "Unknown error" }
      );
    }
  }
);

const businessFormSlice = createSlice({
  name: "businessForm",
  initialState: {
    businessName: "",
    industry: "",
    instagramHashtag: "",
    targetAudience: "",
    marketingGoal: "",
    brandTone: "",
    status: "idle",
    error: null,
  },
  reducers: {
    setFormData(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetForm(state) {
      state.businessName = "";
      state.industry = "";
      state.instagramHashtag = "";
      state.targetAudience = "";
      state.marketingGoal = "";
      state.brandTone = "";
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitBusinessForm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitBusinessForm.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(submitBusinessForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setFormData, resetForm } = businessFormSlice.actions;

export default businessFormSlice.reducer;
