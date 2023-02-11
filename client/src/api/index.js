import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const getLaundry = () => API.get("/laundry");
export const getAllLaundry = () => API.get("/laundry/getAllLaundry");
export const changeStatus = (id, newStatus) =>
  API.patch(`/laundry/${id}`, newStatus);
export const createLaundry = (newLaundry) => API.post("/laundry", newLaundry);
export const changePassword = (formData) =>
  API.post("/user/changePassword", formData);

export const emailSent = (formData) =>
  API.post("/user/recoverPassword", formData);
export const recoverPassword = (id, token, formData) =>
  API.post(`/user/recoverPassword/${id}/${token}`, formData);
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
