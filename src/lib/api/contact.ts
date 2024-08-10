import axios, { AxiosResponse } from "axios";

const API_URL = "https://i-mader.tech/api/v1/contact-us/add";

export const postContactForm = async (
  data: Record<string, any>
): Promise<AxiosResponse> => {
  try {
    const response = await axios.post(API_URL, data);
    return response;
  } catch (error) {
    throw new Error(`Failed to send contact form: ${(error as Error).message}`);
  }
};
