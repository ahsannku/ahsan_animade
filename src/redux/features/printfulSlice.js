import { createSlice } from "@reduxjs/toolkit";
import { printfulAuth } from "../services/printfulAuth";
import { getPrintfulproduct } from "../services/getPrintfulProducts";
import { createPrintfulProduct } from "../services/createPrintfulProduct";
import { getSinglePrintfulProduct } from "../services/getSinglePrintfulProduct";
import { getAllSyncProducts } from "../services/getAllSyncProducts";
import { getSyncVariants } from "../services/getSyncVariants"

const initialState = {
  access_token:
    JSON.parse(localStorage.getItem("printful_access_token")) || null,
  loading: true,
  error: false,
  products: null,
  queuedProducts: [],
  singleProduct:{},
  selectedDeigns: [],
  selectedDesignForProductCreation: null, // selected design for product creation
  allSyncProducts: [],
  syncVariants:[]
};

const printful = createSlice({
  name: "printful",
  initialState,
  reducers: {
    setSelectedDeigns: (state, action) => {
      state.selectedDeigns = action.payload;
    },
    setSelectedDesignForProduct: (state, action) => {
      state.selectedDesignForProductCreation = action.payload;
    },
    addQueuedProduct :(state, action) => {
      state.queuedProducts.push(action.payload);
    },
    deleteQueuedProduct :(state, action) => {
      state.queuedProducts = state.queuedProducts.filter(p => {
        return  p?.sync_product?.product_id !== action.payload?.sync_product?.product_id
      });
    },
    editQueuedProduct :(state, action) => {
      const productIndex = state.queuedProducts.findIndex(p => {
       return p?.sync_product?.product_id === action.payload?.sync_product?.product_id
      });
      if (productIndex !== -1) {
        state.queuedProducts[productIndex] = action.payload;
      }
    },
    clearAllProducts: (state, action) => {
      state.queuedProducts = [];
    }
  },
  extraReducers: (builder) => {
    // === printful auth ==== //
    builder.addCase(printfulAuth.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(printfulAuth.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      if (action.payload.access_token) {
        state.access_token = action.payload.access_token;
        localStorage.setItem(
          "printful_access_token",
          JSON.stringify(action.payload.access_token)
        );
      }
    });
    builder.addCase(printfulAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // === get all product ==== //
    builder.addCase(getPrintfulproduct.pending, (state) => {
      state.loading = true;
      state.error = true;
      state.products = null;
    });
    builder.addCase(getPrintfulproduct.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.products = action.payload.api_data.result;
    });
    builder.addCase(getPrintfulproduct.rejected, (state, action) => {
      state.loading = false;
      state.products = null;

      state.error = action.payload;
    });


    // === create product for printFul API ==== //

    builder.addCase(createPrintfulProduct.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(createPrintfulProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      console.log("Created product: ========>>>>>>>", action.payload);
      state.products = action.payload.result;
    });
    builder.addCase(createPrintfulProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

     // === get single printFul product ==== //
   
     builder.addCase(getSinglePrintfulProduct.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getSinglePrintfulProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.singleProduct = action.payload.api_data.result;
    });
    builder.addCase(getSinglePrintfulProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

     // === get all printFul products from store ==== //
   
     builder.addCase(getAllSyncProducts.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getAllSyncProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;

      console.log(action.payload.result)
      state.allSyncProducts = action.payload.result;
    });
    builder.addCase(getAllSyncProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });




     // === get all sync variants of a  product from store ==== //
   
     builder.addCase(getSyncVariants.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getSyncVariants.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;

      console.log(action.payload.result)
      state.syncVariants = action.payload.result;
    });
    builder.addCase(getSyncVariants.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });




  },
});

export const { setSelectedDeigns, setSelectedDesignForProduct, addQueuedProduct, deleteQueuedProduct, editQueuedProduct, clearAllProducts } =
 printful.actions;
export default printful.reducer;
