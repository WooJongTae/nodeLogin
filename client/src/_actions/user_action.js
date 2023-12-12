import axios from "axios";

export function loginUser(dataToSubmit) {
  const request = axios
    .post("/api/users/login", dataToSubmit)
    .then((response) => {
      return response.data;
    });

  return {
    type: "LOGIN_USER",
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post("/api/users/register", dataToSubmit)
    .then((response) => {
      return response.data;
    });

  return {
    type: "REGISTER_USER",
    payload: request,
  };
}

export function auth() {
  const request = axios.get("/api/users/auth").then((response) => {
    return response.data;
  });

  return {
    type: "AUTH_USER",
    payload: request,
  };
}

// export const loginUser = (dataToSubmit) => (dispatch) => {
//   // 요청 전에 로그인 시작을 알리는 액션을 디스패치합니다.

//   axios
//     .post("/api/users/login", dataToSubmit)
//     .then((response) => {
//       // 로그인 성공 시 액션을 디스패치합니다.
//       dispatch({
//         type: LOGIN_USER,
//         payload: response.data,
//       });
//     })
//     .catch((error) => {
//       // 로그인 실패 시 액션을 디스패치합니다.
//       dispatch({
//         type: `${LOGIN_USER}_FAILURE`,
//         payload: error,
//       });
//       console.error("로그인 실패:", error);
//     });
// };
