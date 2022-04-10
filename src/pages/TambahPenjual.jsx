import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ModalComponent from "../components/ModalComponent";

const TambahPenjual = () => {
  const history = useHistory();
  const [modalUp, setModalUp] = React.useState(false);
  const [modalContent, setmodalContent] = React.useState({
    isSuccess: false,
    title: "",
    content: "",
  });

  const onFinish = (event) => {
    event.preventDefault();
    axios
      .post(`addSeller`, {
        nama: event.target.nama.value,
        kota: event.target.kota.value,
      })
      .then((response) => response.data)
      .then((result) => {
        setmodalContent({
          isSuccess: true,
          title: "Sukses Menambah Penjual",
          content: "Data berhasil ditambah",
        });
      })
      .catch(function (error) {
        console.log("Failed Addseller " + error);
        setmodalContent({
          isSuccess: false,
          title: `Gagal Tambah Penjual`,
          content: error.response.data.message,
        });
      })
      .finally(() => setModalUp(true));
  };

  return (
    <>
      <div className="site-layout-content">
        <form onSubmit={onFinish}>
          <ul className="wrapper">
            <li className="form-row">
              <label htmlFor="nama">Nama :</label>
              <input type="text" id="nama" />
            </li>
            <li className="form-row">
              <label htmlFor="kota">Kota :</label>
              <input type="text" id="kota" />
            </li>
            <li className="form-row">
              <label htmlFor=""></label>
              <button type="submit">Simpan</button>
            </li>
          </ul>
        </form>
      </div>
      <ModalComponent
        type={modalContent}
        visible={modalUp}
        onConfirm={() => {
          setModalUp(false);
          history.push("/");
        }}
      />
    </>
  );
};

TambahPenjual.propTypes = {};

export default TambahPenjual;
