

module.exports = {
  schema: true,
  attributes: {
    name: {
      type: 'string'
    },
    contact: {
      collection: 'contact',
      via: 'submission'
    }
  }
};