import { useState } from "react";
import { CalculatorAppView } from "./calculator-app-view";
import calculatePrice from "./../price-calculator";

export const CalculatorApp: React.FC = () => {
  const [price, setPrice] = useState<number>(0);
  const [userType, setUserType] = useState<number>(0);
  const [productType, setProductType] = useState<number>(0);
  const [publishDate, setPublishDate] = useState<Date>(new Date());
  const [result, setResult] = useState<number | null>(null);
  const today = new Date().toISOString().substring(0, 10);

  return (
    <CalculatorAppView
      price={price}
      userType={userType}
      productType={productType}
      today={today}
      result={result}
      handlePrice={function (event: React.ChangeEvent<HTMLInputElement>): void {
        const newPrice = parseInt(event.target.value);
        setPrice(newPrice);
      }}
      handleUserType={function (): void {
        if (userType === 1) setUserType(0);
        else setUserType(1);
      }}
      handleProductType={function (): void {
        if (productType === 1) setProductType(0);
        else setProductType(1);
      }}
      handlePublishDate={function (
        event: React.ChangeEvent<HTMLInputElement>
      ): void {
        const newDate = new Date(event.target.value);
        setPublishDate(newDate);
      }}
      calculatePrice={function (): void {
        const result = calculatePrice(
          userType,
          productType,
          price,
          publishDate
        );
        setResult(result);
      }}
    />
  );
};
