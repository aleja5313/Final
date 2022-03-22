import "@testing-library/jest-dom";
import { types } from "../types/types";
import { loginSincrono } from "../actions/actionLogin";

describe("Verificar acciones de login", () => {
  it("Validar login sincrono", () => {
    const id = "ABC123";
    const displayname = "Fernando";

    const loginAction = loginSincrono(id, displayname);
    

    expect(loginAction).toEqual({
      type: types.login,
      payload: {
        id,
        displayname,
      },
    });
  });
});
