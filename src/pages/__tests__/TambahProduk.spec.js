import React from 'react';
import TambahProduk from '../TambahProduk';
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Tambah Produk Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TambahProduk />);
  });

  it("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});

