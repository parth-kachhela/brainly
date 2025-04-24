export const random = (len: number) => {
  let str = "kldjchlkjhsadfs+d5654ddssdf4654654dfsdfdf6546s5dfsdf456d5s4f";
  let length = str.length;
  let ans = "";
  for (let i = 0; i < len; i++) {
    ans += str[Math.floor(Math.random() * length)];
  }
  return ans;
};
