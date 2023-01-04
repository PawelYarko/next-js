import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4200';

export const axiosBaseQuery =
  () =>
  async ({ url, method, body, params }) => {
    try {
      const res = await axios({ url, method, data: body, params });
      console.log(res)
      return { data: res.data };
    } catch (axiosError) {
      return {
        error: {
          status: axiosError.response?.status,
          data:
            axiosError.response?.data?.message ||
            axiosError.response?.statusText ||
            axiosError.message,
        },
      };
    }
  };

