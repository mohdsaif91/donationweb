export function emailValidator(value) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}

export const getFormData = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    // if (key == "recevierImages") {
    //   data[key].map((m) => {
    //     formData.append(key, m);
    //   });
    // } else {
    formData.append(key, data[key]);
    // }
  });
  return formData;
};
