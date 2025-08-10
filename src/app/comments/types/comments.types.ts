export interface Comment {
  id: string;
  name: string;
  email?: string;
  comment: string;
  createdAt: number;
  status: "public" | "hidden" | "pending";
}

export interface ActionState {
  success: boolean;
  error: string;
  message: string;
}
