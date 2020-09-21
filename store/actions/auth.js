export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDbri37A8GluCSGhoNi23MaUAy3I4dfdrg`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, returnSecureToken: true }),
      }
    );

    if (!response.ok) {
      throw new Error("Algo ocurrió");
    }

    const resData = await response.json();
    dispatch({ type: SIGNUP });
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDbri37A8GluCSGhoNi23MaUAy3I4dfdrg`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, returnSecureToken: true }),
      }
    );

    if (!response.ok) {
      throw new Error("Algo ocurrió");
    }

    const resData = await response.json();
    console.log("resData", resData);
    dispatch({ type: LOGIN });
  };
};
