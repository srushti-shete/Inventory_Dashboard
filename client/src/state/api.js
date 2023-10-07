import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User", 
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
  ],
    endpoints: (build) => ({
      getUser: build.query({
        query: (id) => `http://localhost:5001/general/user/${id}`,
        providesTags: ["User"],
      }),
      getProducts: build.query({
        query: () => "http://localhost:5001/client/products",
        providesTags: ["Products"],
      }),
      getCustomers: build.query({
        query: () => "http://localhost:5001/client/customers",
        providesTags: ["Customers"],
      }),
      getTransactions: build.query({
        query: ({ page, pageSize, sort, search }) => ({
          url: "http://localhost:5001/client/transactions",
          method: "GET",
          params: { page, pageSize, sort, search },
        }),
        providesTags: ["Transactions"],
      }),
      getGeography: build.query({
        query: () => "http://localhost:5001/client/geography",
        providesTags: ["Geography"],
      }),
      getSales: build.query({
        query: () => "http://localhost:5001/sales/sales",
        providesTags: ["Sales"],
      }),
      getAdmins: build.query({
        query: () => "http://localhost:5001/management/admins",
        providesTags: ["Admins"],
      }),
      getUserPerformance: build.query({
        query: (id) => `http://localhost:5001/management/performance/${id}`,
        providesTags: ["Performance"],
      }),
      getDashboard: build.query({
        query: () => "http://localhost:5001/general/dashboard",
        providesTags: ["Dashboard"],
      }),

  })
})

export const {useGetUserQuery, useGetProductsQuery,  useGetCustomersQuery, useGetTransactionsQuery,  useGetGeographyQuery,  useGetSalesQuery, useGetAdminsQuery, useGetUserPerformanceQuery, useGetDashboardQuery, } =api;