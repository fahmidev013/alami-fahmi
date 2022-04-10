import React from 'react';
import TambahPenjual from '../TambahPenjual';
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Tambah Penjual Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TambahPenjual />);
  });

  it("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});

