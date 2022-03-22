import "@testing-library/jest-dom";
import { type } from "@testing-library/user-event/dist/type";
import Login from "../components/Login";
import { loginReducer } from "../reducers/loginReducer";
import { types } from "../types/types";
import { shallow } from "enzyme";

describe("Pruebas en loginReducer", () => {



  it("debe de realizar el login", () => {
    const initState = {};
    const action = {
      type: types.login,
      payload: {
        id: "abc",
        displayname: "Fernando"
      },
    };
    const state = loginReducer(initState, action);
    expect(state).toEqual({
      id: "abc",
      name: "Fernando",
    });
  });
});

it('State por default', () =>{
    const initState = {  
        id: "abc",
        name: "Fernando"
    }
    const action ={
        type:type.Hola
    }
    const state =loginReducer(initState, action)
    expect(state).toEqual(initState)
})

