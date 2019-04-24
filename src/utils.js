const generatePermutate = (arr, set, len, duplicate=false) => {
  let result = [];
  for(let i=0;i<set.length;i++){
    if (!duplicate && arr.includes(set[i])) continue;
    const nArr = [...arr, set[i]];
    if (nArr.length===len) {
      result = [...result, nArr]
    } else {
      result = [...result, ...generatePermutate(nArr, set, len, duplicate)]
    }
  }
  return result;
}

const split = (arr, len) => arr.length<=len ? [arr] : [arr.slice(0, len), ...split(arr.slice(len), len)];

const row = (num, arr, reverse, r=[...arr[num]]) => !reverse ? r : r.reverse();

const col = (num, arr, reverse, r=[...arr.map(r=>r[num])]) => !reverse ? r : r.reverse();

const unique = arr => [...new Set(arr)];

const duplicate = arr => unique(arr).length!=arr.length;