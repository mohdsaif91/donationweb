export function emailValidator(value) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}

export const getFormData = (data) => {
  const formData = new FormData();
  Object.keys(data).map((key) => {
    console.log(key, data[key]);
    formData.append(key, data[key]);
  });
};
