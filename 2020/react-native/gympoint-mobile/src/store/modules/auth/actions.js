export function SignInRequest(id) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { id },
  };
}

export function SignInSuccess(id, name) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { id, name },
  };
}

export function SignInFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function SignOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
