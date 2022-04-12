import "./calculator-app.css";

interface Props {
  price: number;
  userType: string;
  userTypeList: Array<string>;
  productType: string;
  productTypeList: Array<string>;
  today: string;
  result: number | null;
  handlePrice: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUserType: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleProductType: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePublishDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  calculatePrice: () => void;
}

export const CalculatorAppView: React.FC<Props> = ({
  price,
  userType,
  userTypeList,
  productType,
  productTypeList,
  today,
  result,
  handlePrice,
  handleUserType,
  handleProductType,
  handlePublishDate,
  calculatePrice,
}) => {
  return (
    <div className="container">
      <div className="form">
        <h2 className="title">Calculator</h2>
        <form>
          <label>
            Price:
            <input
              id="price"
              type="number"
              defaultValue={price}
              onChange={(event) => handlePrice(event)}
            />
          </label>
          <label>
            User type:
            <select
              id="userType"
              value={userType}
              onChange={(event) => handleUserType(event)}
            >
              {userTypeList.map((type, index) => {
                return (
                  <option value={type} key={index}>
                    {type}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            New product:
            <select
              id="productType"
              value={productType}
              onChange={(event) => handleProductType(event)}
            >
              {productTypeList.map((type, index) => {
                return (
                  <option value={type} key={index}>
                    {type}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            Publish date:
            <input //publishDate.toISOString gave invalid date for single digit months when using keyboard.
              id="publishDate"
              type="date"
              defaultValue={today}
              max="9999-12-31"
              onChange={(event) => handlePublishDate(event)}
            />
          </label>
          <button
            id="calculate"
            className="button"
            type="button"
            onClick={() => calculatePrice()}
          >
            Calculate
          </button>
        </form>
        <div className="result-container">
          Result:
          <span id="result">{result}</span>
        </div>
      </div>
    </div>
  );
};
