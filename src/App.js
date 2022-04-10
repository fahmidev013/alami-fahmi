import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Switch, Route, NavLink, withRouter, Redirect } from "react-router-dom";
import TambahPenjual from "./pages/TambahPenjual";
import TambahProduk from "./pages/TambahProduk";
import DaftarProduk from "./pages/DaftarProduk";
import CariProduk from "./pages/CariProduk";


function App() {
  return (
    <div className="container">
      <div className="tab"> 
        <NavLink to="/home" activeClassName="activenav"><button>Daftar Produk</button></NavLink>
        <NavLink to="/cari" activeClassName="activenav"><button> Cari Produk</button></NavLink>
        <NavLink to="/penjual" activeClassName="activenav"><button >Tambah Penjual</button></NavLink>
        <NavLink to="/produk" activeClassName="activenav"><button>Tambah Produk</button></NavLink>
      </div>
      <div id="tabcontent" className="tabcontent">
      <Switch>
           <Route path="/penjual" ><TambahPenjual /></Route>
           <Route path="/produk" ><TambahProduk /></Route>
           <Route path="/cari" ><CariProduk /></Route>
           <Route path="/home" ><DaftarProduk /></Route>
          <Route path="/" ><Redirect to="/home" /></Route>
         </Switch>
      </div>
      <div className="footer">Alami Test with Fahmi Hakim</div>
    </div>
  );
}

export default withRouter(App);
