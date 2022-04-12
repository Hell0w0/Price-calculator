import { useState } from "react";
import { CalculatorAppView } from "./calculator-app-view";

//Types
const userTypeList = ["Normal", "Company user"];
const productTypeList: { [type: string]: number } = { New: 25, Old: 35 };

export const CalculatorApp: React.FC = () => {
  //Input
  const [price, setPrice] = useState<number>(0);
  const [userType, setUserType] = useState<string>("Normal");
  const [productType, setProductType] = useState<string>("Old");
  const [publishDate, setPublishDate] = useState<Date>(new Date());

  const today = new Date().toISOString().substring(0, 10);
  //Price calculation result
  const [result, setResult] = useState<number | null>(0);

  return (
    <CalculatorAppView
      price={price}
      userType={userType}
      userTypeList={userTypeList}
      productType={productType}
      productTypeList={Object.keys(productTypeList)}
      today={today}
      result={result}
      handlePrice={function (event: React.ChangeEvent<HTMLInputElement>): void {
        const newPrice = Number(event.target.value);
        setPrice(newPrice);
      }}
      handleUserType={function (
        event: React.ChangeEvent<HTMLSelectElement>
      ): void {
        const newUserType = event.target.value;
        setUserType(newUserType);
      }}
      handleProductType={function (
        event: React.ChangeEvent<HTMLSelectElement>
      ): void {
        const newProductType = event.target.value;
        setProductType(newProductType);
      }}
      handlePublishDate={function (
        event: React.ChangeEvent<HTMLInputElement>
      ): void {
        const newDate = new Date(event.target.value);
        setPublishDate(newDate);
      }}
      calculatePrice={function (): void {
        const result = calculatePrice(
          price,
          userType,
          productType,
          publishDate
        );

        setResult(result);
      }}
    />
  );
};

//Checks the rebate rules if the conditions apply the appropariate discount.
export function checkRebateRules(
  price: number,
  userType: string,
  productType: string,
  publishDate: Date
) {
  let rebate = 0;
  if (userType == "Company user") rebate += 5;
  if (
    publishDate.toDateString() === new Date().toDateString() &&
    productType === "New"
  )
    rebate += 10;
  return rebate;
}

//Calculates the price based on the input using the pice formula
// price + product type price - rebate
export function calculatePrice(
  price: number,
  userType: string,
  productType: string,
  publishDate: Date
) {
  const rebate = checkRebateRules(price, userType, productType, publishDate);

  return price + productTypeList[productType] - rebate;
}
