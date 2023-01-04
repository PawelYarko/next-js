import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../services/service";

export const galleryApi = createApi({
  reducerPath: "galleryApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["gallery"],
  endpoints: (build) => ({
    getGallery: build.query({
      query: () => ({
        url: "/gallery",
        method: "GET",
      }),
      providesTags: ["gallery"],
      transformResponse: (response) => response.data,
    }),
  //   addFolder: build.mutation({
  //     query: ({ ...patch }) => ({
  //       url: "/gallery/folder",
  //       method: "POST",
  //       body: patch,
  //     }),
  //     invalidatesTags: ["gallery"],
  //   }),
  //   getFolder: build.query({
  //     query: ({ folderId }) => ({
  //       url: `/gallery/folder/${folderId}`,
  //       method: "GET",
  //     }),
  //     providesTags: ["gallery"],
  //     transformResponse: (response) => response.data,
  //   }),
  //   updateFolder: build.mutation({
  //     query: ({ folderId, ...patch }) => ({
  //       url: `/gallery/folder/${folderId}`,
  //       method: "PATCH",
  //       body: patch,
  //     }),
  //     invalidatesTags: ["gallery"],
  //   }),
  //   deleteFolder: build.mutation({
  //     query: ({ folderId }) => ({
  //       url: `/gallery/folder/${folderId}`,
  //       method: "DELETE",
  //     }),
  //     invalidatesTags: ["gallery"],
  //   }),
  //   uploadImage: build.mutation({
  //     query: ({ folderId }) => ({
  //       url: `/gallery/folder/images/${folderId}`,
  //       method: "POST",
  //     }),
  //     invalidatesTags: ["gallery"],
  //   }),
  //   deleteImage: build.mutation({
  //     query: ({ folderId, imgId }) => ({
  //       url: `/gallery/folder/images/${folderId}/${imgId}`,
  //       method: "DELETE",
  //     }),
  //     invalidatesTags: ["gallery"],
  //   }),
  }),
});

export const {
  useGetGalleryQuery,
  // useAddFolderMutation,
  // useGetFolderQuery,
  // useUpdateFolderMutation,
  // useDeleteFolderMutation,
  // useUploadImageMutation,
  // useDeleteImageMutation,
} = galleryApi;