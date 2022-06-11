const isObject = (data) => {
  if (Array.isArray(data)) return false;

  return typeof data === "object";
};

const cloneDeep = (obj) => {
  const iter = (pairs, acc) => {
    const [head, ...tail] = pairs;

    if (!head) return acc;

    const [name, value] = head;

    if (!isObject(value)) {
      acc[name] = value;
      return iter(tail, acc);
    }

    return Object.assign({}, acc, { [name]: iter(Object.entries(value), {}) });
  };

  return iter(Object.entries(obj), {});
};

const data = {
  name: "one",
  value: "success",
  meta: {
    id: 1,
    title: "response",
    errors: [],
    tags: ["kokoko", "pispispis"],
    settings: {
      enabled: false,
      trigger: "request",
      status: "failed",
    },
  },
};

console.log("!!cloneDeep(data)", cloneDeep(data));
// // === {
//   name: 'one',
//   value: 'success',
//   meta: {
//     id: 1,
//     title: 'response',
//     errors: [],
//     tags: [ 'kokoko', 'pispispis' ],
//     settings: { enabled: false, trigger: 'request', status: 'failed' }
//   }
// }
