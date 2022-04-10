import PropTypes from "prop-types";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProductList, getProductsByKeyword } from "../redux/reducer/produkReducer";
import TableComponent from "../components/TableComponent";

export const CariProduk = () => {
  const products = useSelector(selectProductList);
  const dispatch = useDispatch();

  const onSearch = (event) => {
    event.preventDefault();
    dispatch(getProductsByKeyword(document.getElementById('cari-produk').value));
  };

  const onChange = (event) => {
    event.preventDefault();
    event.persist();
    if (event.target.value.length > 3) {
      setTimeout( () => {
        dispatch(getProductsByKeyword(event.target.value));
      }, 1500);
    }
  }

  return (
    
      <div className="site-layout-content">
          <div className="search-container">
            <input id="cari-produk" name="q" placeholder="Ketik nama Produk:" onChange={onChange} />
            <button onClick={onSearch}>Cari</button>
          </div>
          <div style={{ overflow: 'scroll', maxHeight: '65vh'}}>
            <TableComponent data={products} />
          </div>
      </div>
  );
};

CariProduk.propTypes = {
  products: PropTypes.array,
};

export default CariProduk;
