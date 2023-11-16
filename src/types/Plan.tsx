import Feature from "./Feature";

type Plan = {
  id: string;
  name: string;
  description: string;
  price: number;
  features: Feature[];
};

export default Plan;
