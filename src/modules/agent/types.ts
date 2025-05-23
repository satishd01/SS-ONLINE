// app/(DashboardLayout)/agent/types.ts
import * as Yup from "yup";
import { addEditAgentSchema } from "./validation-schema";

export type addEditAgentTypes = Yup.InferType<typeof addEditAgentSchema>;

export type editAgentTypes = {
  email: string;
  phoneNumber: string;
  fullName: string;
};