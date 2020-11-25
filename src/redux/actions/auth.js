export function login() {
  return { type: "LOGIN" };
}

export function logout() {
  return { type: "LOGOUT" };
}

export function signup() {
  return { type: "SIGNUP" };
}

export function handleError(errorMessage) {
  return { type: "ERROR", payload: errorMessage };
}
