import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/auth-api';

export const register = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const response = await api.register(body);
      return response;
    } catch (error) {
      // console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const response = await api.login(body);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await api.getCurrent(auth.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.logout();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// const baseURL = 'https://connections-api.herokuapp.com/users'
// export const register = createAsyncThunk(
//   'auth/signup',
//   async (body, { rejectWithValue }) => {
//     try {
//       const response = await fetch(`${baseURL}/signup`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//       });
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status} - ${response.statusText}`);
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
