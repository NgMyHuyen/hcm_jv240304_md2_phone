import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:3000/productList");
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    const response = await axios.post(
      "http://localhost:3000/productList",
      product
    );
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/editProduct",
  async (product) => {
    const response = await axios.patch(
      `http://localhost:3000/productList/${product.id}`,
      product
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await axios.delete(`http://localhost:3000/productList/${id}`);
    return id;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    img: "",
    productName: "",
    price: "",
    quantity: "",
    listPhone: [
      {
        id: 1,
        category: "iphone",
        img: "https://cdn.tgdd.vn/Products/Images/42/220522/iphone-13-pro-max-xanh-duong-600x600-600x600.jpg",
        productName: "Galaxy S24 Ultra",
        phonePrice: 37490000,
        quantity: 20,
        phoneText1: "Phan cung manh me",
        phoneText2: "Lam tu Titan.",
      },
      {
        id: 2,
        category: "samsung",
        img: "https://images.samsung.com/is/image/samsung/assets/vn/smartphones/a55/pcd/Galaxy_A55_PCD_MD_Large_PC.png?$376_376_PNG$",
        productName: "Galaxy S24 Ultra",
        phonePrice: 37490000,
        phoneText1: "Phan cung manh me",
        phoneText2: "Lam tu Titan.",
      },
      {
        id: 3,
        category: "samsung",
        img: "https://images.samsung.com/is/image/samsung/assets/vn/2401/pcd/smp/PCD_E1E2_Online_Whats-new_330x330_pc.jpg?$330_330_JPG$",
        productName: "Galaxy S24 Ultra",
        phonePrice: 37490000,
        phoneText1: "Phan cung manh me",
        phoneText2: "Lam tu Titan.",
      },
    ],
  },

  reducers: {
    addData: (state, action) => {
      state.push(action.payload);
    },
    deleteData: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        return state.filter((product) => product.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
