import PropTypes from "prop-types";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TableComponent from "../components/TableComponent";
import {
  selectProductList,
  getProducts,
  getProductsByKeyword,
} from "../redux/reducer/produkReducer";

export const DaftarProduk = () => {
  const products = useSelector(selectProductList);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProductsByKeyword(''));
  }, []);

  const submit = (event) => {
    event.preventDefault();
    if (document.getElementById('sellerId').value !== ''){
        dispatch(getProducts(document.getElementById('sellerId').value));
    } else {
        dispatch(getProductsByKeyword(''));
    }
    
  };

  const reset = (event) => {
    event.preventDefault();
    document.getElementById('sellerId').value = '';
    dispatch(getProductsByKeyword(''));
  }

  return (
      <div className="site-layout-content">
        <form className='inputForm' onSubmit={submit}>
          <input
            type="text"
            id="sellerId"
            placeholder="Ketik ID Seller"
            name="sellerId"
          />
          <button type="submit">Filter</button>&nbsp;&nbsp;&nbsp;
          <button onClick={reset}>Reset</button>
        </form>
        {products.length > 0 && (
          <div style={{ overflow: "scroll", maxHeight: "65vh" }}>
            <TableComponent data={products} />
          </div>
        )}
      </div>
  );
};

DaftarProduk.propTypes = {
  dataReducer: PropTypes.array,
};

export default DaftarProduk;
