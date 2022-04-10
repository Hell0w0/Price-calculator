import "./calculator-app.css";

interface Props {
  price: number;
  userType: number;
  productType: number;
  publishDate: string;
  result: number | null;
}

export const CalculatorAppView: React.FC<Props> = ({
  price,
  userType,
  productType,
  publishDate,
  result,
}) => {
  return (
    <div className="container">
      <div className="form">
        <h2 className="header">Calculator</h2>
        <form>
          <label>
            Price:
            <input id="price" type="number" value={price} />
          </label>
          <label>
            Company user:
            <input
              id="userType"
              type="checkbox"
              checked={userType === 1 ? true : false}
            />
          </label>
          <label>
            New product:
            <input
              id="productType"
              type="checkbox"
              checked={productType == 1 ? true : false}
            />
          </label>
          <label>
            Publish date:
            <input
              id="publishDate"
              defaultValue={publishDate}
              type="date"
              max="9999-12-31"
            />
          </label>
          <button id="calculate" className="button" type="button">
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
