export function handleError(errorMessage) {
  return { type: 'ERROR', payload: errorMessage };
}
