import "./calculator-app.css";

interface Props {
  price: number;
  userType: number;
  productType: number;
  today: string;
  result: number | null;
  handlePrice: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUserType: () => void;
  handleProductType: () => void;
  handlePublishDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  calculatePrice: () => void;
}

export const CalculatorAppView: React.FC<Props> = ({
  price,
  userType,
  productType,
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
        <h2 className="header">Calculator</h2>
        <form>
          <label>
            Price:
            <input
              id="price"
              type="number"
              value={price}
              onChange={(event) => handlePrice(event)}
            />
          </label>
          <label>
            Company user:
            <input
              id="userType"
              type="checkbox"
              checked={userType === 1 ? true : false}
              onChange={() => handleUserType()}
            />
          </label>
          <label>
            New product:
            <input
              id="productType"
              type="checkbox"
              checked={productType == 1 ? true : false}
              onChange={() => handleProductType()}
            />
          </label>
          <label>
            Publish date:
            <input // value publishDate in string format gave invalid date for single digit months.
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
          {result !== null ? <span id="result">{result}</span> : <span></span>}
        </div>
      </div>
    </div>
  );
};
