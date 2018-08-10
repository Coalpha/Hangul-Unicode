export const consonants = {
  ㄱ: 1,
  ㄴ: 1,
  ㄷ: 1,
  ㄹ: 1,
  ㅁ: 1,
  ㅂ: 1,
  ㅅ: 1,
  ㅇ: 1,
  ㅈ: 1,
  ㅊ: 1,
  ㅋ: 1,
  ㅌ: 1,
  ㅍ: 1,
  ㅎ: 1,
  ㆁ: 1, // apparently this is now "ㅇ"
  ㆄ: 1,
  ㅱ: 1,
  ㅿ: 1,
};
export const vowels = {
  ㅏ: 1,
  ㅐ: 1,
  ㅑ: 1,
  ㅓ: 1,
  ㅔ: 1,
  ㅕ: 1,
  ㅖ: 1,
  ㅗ: 1,
  ㅛ: 1,
  ㅜ: 1,
  ㅠ: 1,
  ㅡ: 1,
  ㅣ: 1,
  ㆍ: 1,
};
export const toKeys = {
  ㅂ: 'q',
  ㅃ: 'Q',
  ㅈ: 'w',
  ㅉ: 'W',
  ㄷ: 'e',
  ㄸ: 'E',
  ㄱ: 'r',
  ㄲ: 'R',
  ㅅ: 't',
  ㅆ: 'T',
  ㅛ: 'y',
  ㅕ: 'u',
  ㅑ: 'i',
  ㅐ: 'o',
  ㅒ: 'O',
  ㅔ: 'p',
  ㅖ: 'P',
  ㅁ: 'a',
  ㄴ: 's',
  ㅇ: 'd',
  ㄹ: 'f',
  ㅎ: 'g',
  ㅗ: 'h',
  ㅓ: 'j',
  ㅏ: 'k',
  ㅣ: 'l',
  ㅋ: 'z',
  ㅌ: 'x',
  ㅊ: 'c',
  ㅍ: 'v',
  ㅠ: 'b',
  ㅜ: 'n',
  ㅡ: 'm',
};
export const fromKeys = {
  q: 'ㅂ',
  Q: 'ㅃ',
  w: 'ㅈ',
  W: 'ㅉ',
  e: 'ㄷ',
  E: 'ㄸ',
  r: 'ㄱ',
  R: 'ㄲ',
  t: 'ㅅ',
  T: 'ㅆ',
  y: 'ㅛ',
  u: 'ㅕ',
  i: 'ㅑ',
  o: 'ㅐ',
  O: 'ㅒ',
  p: 'ㅔ',
  P: 'ㅖ',
  a: 'ㅁ',
  s: 'ㄴ',
  d: 'ㅇ',
  f: 'ㄹ',
  g: 'ㅎ',
  h: 'ㅗ',
  j: 'ㅓ',
  k: 'ㅏ',
  l: 'ㅣ',
  z: 'ㅋ',
  x: 'ㅌ',
  c: 'ㅊ',
  v: 'ㅍ',
  b: 'ㅠ',
  n: 'ㅜ',
  m: 'ㅡ',
};
// the reason the data is stored like this is because iterating
// through an array is slower than just getting a key from an object
// In this case though, it might be faster since arrays are allocated
// on the heap instead of the stack?

// I realize that I can programmatically reverse the key-value pairs during
// runtime but since I can just do it now, it's just a little faster.
