import React from "react";
import { shallow } from "enzyme";
import "../setupTests";
import Account from "../components/Account";

describe("Account", () => {

    it("Deberia renderizar correctamente", () => {
      const component = shallow(<Account />);

      expect(component).toMatchSnapshot();
    });

  
});


