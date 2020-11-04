// module.exports = {
//   mongoURI: 'mongodb+srv://chris:admin123@shoppinglist.ieqlr.mongodb.net/shoppinglist?retryWrites=true&w=majority'
// };

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})