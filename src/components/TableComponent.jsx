import React from 'react'
import PropTypes from 'prop-types'
import './TableComponent.css'

function TableComponent({ data }) {

  return (
    <table className="styled-table">
          <thead>
              <tr>
                  <th>Produk ID</th>
                  <th>Nama Produk</th>
                  <th>Satuan</th>
                  <th>Harga Satuan</th>
                  <th>Seller ID</th>
                  <th>Deskripsi</th>
              </tr>
          </thead>
          <tbody>
              { data.length > 0 && data.map(item => (
                  <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.nama}</td>
                      <td>{item.satuan}</td>
                      <td>{item.hargaSatuan}</td>
                      <td>{item.sellerId}</td>
                      <td>{item.deskripsi}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  )
}

TableComponent.propTypes = {
    data: PropTypes.array
}
TableComponent.defaultProps = {
    data: []
}


export default TableComponent
