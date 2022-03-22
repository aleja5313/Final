import React from "react";
import { shallow, mount } from "enzyme";
import { Compras, getData } from "../components/Compras";
import "../setupTests";
import { act } from "react-dom/test-utils";

describe("Compras", () => {
  beforeEach(() => {
    try {
      fetch.mockResponseOnce(JSON.stringify(mock));
    } catch (error) {
      console.log(error);
    }
  });

    it("Deberia renderizar correctamente", () => {
      const component = shallow(<Compras />);

      expect(component).toMatchSnapshot();
    });

  it("Deberia consultar la API correctamente", async () => {
    let data;
    try {
      data = await getData();
    } catch (error) {
      data = {};
      console.log(error);
    }

    expect(data).toEqual(mock.ingredients);
  });

  it("Valor inicial deberia ser 0", async () => {
    await act(async () => {
      const component1 = mount(<Compras />);

      expect(component1.find("#c").find("#resultadof").text()).toBe("Items 0");
    });
  });
});

const mock = {
  ingredients: [
    {
      product: "producto de prueba",
      brand: "marca de prueba",
      items: 1,
      quantity: "600 gr.",
      price: 2.95,
    },
  ],
};
