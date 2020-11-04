// module.exports = {
//   mongoURI: 'mongodb+srv://chris:admin123@shoppinglist.ieqlr.mongodb.net/shoppinglist?retryWrites=true&w=majority'
// };

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://chris:admin123@shoppinglist.ieqlr.mongodb.net/shoppinglist?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})