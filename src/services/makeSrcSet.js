export default function makeSrcSet(urlArray) {
  let result = '';
  for (let i = 0; i < urlArray.length; i += 1) {
    result += `${urlArray[i]} ${i + 1}x`;
    if (i < urlArray.length - 1) {
      result += ', ';
    }
  }
  return result;
}
