const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!MONGODB_URI) {
  console.error('MONGODB_URI missing in .env.local');
  process.exit(1);
}
if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error('Set ADMIN_EMAIL and ADMIN_PASSWORD in .env.local');
  process.exit(1);
}

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    _id: { type: String },
  },
  { timestamps: true },
);

const User = mongoose.models.User || mongoose.model('User', UserSchema);

(async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    const existing = await User.findOne({ email: ADMIN_EMAIL }).lean();
    if (existing) {
      console.log('Admin already exists:', ADMIN_EMAIL);
      process.exit(0);
    }
    const hashed = await bcrypt.hash(ADMIN_PASSWORD, 10);
    const created = await User.create({ name: 'Admin', email: ADMIN_EMAIL, password: hashed });
    console.log('Admin created:', created.email);
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
})();
