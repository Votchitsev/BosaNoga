export default function createParamsObject(offset, categoryId) {
  let result = {};

  if (offset) {
    result = { ...result, offset };
  }

  if (categoryId) {
    result = { ...result, categoryId };
  }

  return result;
}
