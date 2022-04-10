import { useState } from "react";
import { CalculatorAppView } from "./calculator-app-view";
import calculatePrice from "./../price-calculator";

export const CalculatorApp: React.FC = () => {
  const [price, setPrice] = useState<number>(0);
  const [userType, setUserType] = useState<number>(0);
  const [productType, setProductType] = useState<number>(0);
  const [publishDate, setPublishDate] = useState<Date>(new Date());
  const [result, setResult] = useState<number | null>(null);
  return (
    <CalculatorAppView
      price={price}
      userType={userType}
      productType={productType}
      publishDate={publishDate.toJSON().split(":")[0]}
      result={result}
    />
  );
};
