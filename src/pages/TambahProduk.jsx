import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ModalComponent from '../components/ModalComponent'

function TambahProduk() {
  const history = useHistory();
  const [modalUp, setModalUp] = React.useState(false)
  const [modalContent, setmodalContent] = React.useState({
      isSuccess: false, title: '', content: ''
  })
  

  const onFinish = (event) => {
    event.preventDefault();
    const produk = {
      sellerId: event.target.id_penjual.value,
      nama: event.target.nama_produk.value,
      satuan: event.target.satuan.value,
      hargaSatuan: event.target.harga_satuan.value,
      deskripsi: event.target.deskripsi.value,

    }
    axios
      .post(`addProduct`, produk)
      .then((response) => response.data)
      .then((result) => {
        setmodalContent({ isSuccess: true, title: 'Sukses Menambah Produk', content: 'Data berhasil ditambah'});
      })
      .catch(function (error) {
        console.log("Failed AddProduct " + error.response.data.message);
        setmodalContent({ isSuccess: false, title: `Gagal Tambah Produk`, content: error.response.data.message})
      })
      .finally(() => setModalUp(true));
  };
  return (
    <>
      <div className="site-layout-content">
        <form onSubmit={onFinish}>
          <ul className="wrapper">
            <li className="form-row">
              <label htmlFor="id_penjual">ID Penjual :</label>
              <input type="number" id="id" />
            </li>
            <li className="form-row">
              <label htmlFor="nama_produk">Nama Produk :</label>
              <input type="text" id="nama_produk"/>
            </li>
            <li className="form-row">
              <label htmlFor="satuan">Satuan Produk :</label>
              <input type="text" id="satuan" />
            </li>
            <li className="form-row">
              <label htmlFor="harga_satuan">Harga Satuan :</label>
              <input type="number" id="harga_satuan" />
            </li>
            <li className="form-row">
              <label htmlFor="deskripsi">Deskripsi :</label>
              <textarea id="deskripsi" />
            </li>
            <li className="form-row">
              <button type="submit">Simpan</button>
            </li>
          </ul>
        </form>
      </div>
      <ModalComponent type={modalContent} visible={modalUp} onConfirm={() => {
          setModalUp(false)
          history.push('/');
          }} />
    </>
  );
}

TambahProduk.propTypes = {};

export default TambahProduk;
