import React from 'react';
import CariProduk from '../CariProduk';
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
const data = [
  {
    key: 25,
    id: 25,
    nama: "Alpukat",
    satuan: "kg",
    hargaSatuan: 35000,
    sellerId: 65,
    deskripsi: "Alpukat Mentega",
  },
  {
    key: 31,
    id: 31,
    nama: "Balsem",
    satuan: "botol",
    hargaSatuan: 2000,
    sellerId: 65,
    deskripsi: "Balsem Oles",
  },
];


jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn().mockReturnValue(data),
  useDispatch: jest.fn(),
}));



describe("Cari Produk Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CariProduk />);
  });
  it("should render with data correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should call Table while data not empty ", () => {
    expect(wrapper.find("TableComponent")).toHaveLength(1);
  });

});

