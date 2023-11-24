const validateSchema = (schema, data) => {
  const { error } = schema.validate(data);

  if (!error) return null;

  const { details } = error;
  const message = details.map((item) => item.message).join(', ');

  return { message };
};

const validatePost = (schema, data) => {
  console.log('DATAAA', data);
  const { error } = schema.validate(data);
  if (error) {
    const { details } = error;
    const message = details.map((item) => item.message).join(', ');
    return { status: 'BAD_REQUEST', data: { message } };
  }
  return null;
};

module.exports = { validateSchema, validatePost };