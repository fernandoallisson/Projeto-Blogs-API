const validateSchema = (schema, data) => {
  console.log(schema);
  const { error } = schema.validate(data);

  if (!error) return null;

  const { details } = error;
  const message = details.map((item) => item.message).join(', ');

  return { message };
};

module.exports = validateSchema;