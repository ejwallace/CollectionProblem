
module.exports = {
  schema: true,
  attributes: {
    submission: {
      model: 'submission'
    },
    toJSON: function(){
      return this.toObject();
    }
  }
};