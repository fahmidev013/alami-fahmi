import React from "react";
import DaftarProduk from "../DaftarProduk";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import produkReducer, {
  reset,
  getProducts,
} from "../../redux/reducer/produkReducer";
import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as redux from "react-redux";

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

describe("Daftar Produk Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DaftarProduk />);
  });
  it("should render with data correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should handle initial state", () => {
    expect(produkReducer(undefined, { type: "unknown" })).toEqual({
      list: [],
      loading: false,
    });
  });

  const initialState = {
    list: ["new", "value"],
    loading: false,
  };
  it("should handle reset", () => {
    const actual = produkReducer(initialState, reset());
    expect(actual.list).toEqual([]);
  });

  it("should pass", async () => {
    const postSpy = jest
      .spyOn(axios, "get")
      .mockResolvedValue({ data: { id: "1" } });
    const store = configureStore({
      reducer: function (state = "", action) {
        switch (action.type) {
          case "products/getProducts/fulfilled":
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(getProducts());
    expect(postSpy).toBeCalledWith("listProductBySellerId?seller_id=undefined");
    const state = store.getState();
    expect(state).toEqual([]);
  });

  it("should render each elements", () => {
    expect(wrapper.find("input").props()["name"]).toBe("sellerId");
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("button")).toHaveLength(2);
  });

  it("should submit form", () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    const eventSubmit = jest
      .spyOn(document, "getElementById")
      .mockImplementation(() => document.createElement("div"));
    const context = mount(
      <DaftarProduk>
        <form onSubmit={eventSubmit}>
        </form>
      </DaftarProduk>
    );
    context.find("form").simulate("submit", eventSubmit);
    expect(eventSubmit).toHaveBeenCalledTimes(2);

    useDispatchSpy.mockClear();
  });
});
