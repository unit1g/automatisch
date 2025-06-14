const formSerializer = (form) => {
  const formData = {
    id: form.id,
    name: form.name,
    fields: form.fields,
    createdAt: form.createdAt.getTime(),
    updatedAt: form.updatedAt.getTime(),
  };

  return formData;
};

export default formSerializer;
