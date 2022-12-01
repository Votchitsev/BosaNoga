export default function createParamsObject(offset, categoryId, q) {
  let result = {};

  if (offset) {
    result = { ...result, offset };
  }

  if (categoryId) {
    result = { ...result, categoryId };
  }

  if (q) {
    result = { ...result, q };
  }

  return result;
}
