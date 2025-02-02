import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import api from "../config/api";
import { setCookie } from "../utils/cookie";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);

  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("auth/check-otp", data);

  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };
  return useMutation({ mutationFn, onSuccess });
};

const useAddToBasket = () => {
  const mutationFn = (id) => api.put(`basket/${id}`);

  return useMutation({
    mutationFn,
    onSuccess: (response) => {
      console.log(response.data.message);
    },
    onError: (error) => {
      console.error("Error in add tour to basket:", error);
    },
  });
};
const useUpdateUserAccount = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.put("user/profile", data);

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };

  return useMutation({ mutationFn, onSuccess });
};
const useUpdatePersonalAccount = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.put("user/profile", data);

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

const useUpdateBankAccount = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.put("user/profile", data);

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

const useCheckout = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("order", data);

  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 360);
    queryClient.invalidateQueries({ queryKey: ["user-tours"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

export {
  useCheckOtp,
  useSendOtp,
  useAddToBasket,
  useCheckout,
  useUpdateBankAccount,
  useUpdateUserAccount,
  useUpdatePersonalAccount,
};
