import { connect } from 'mongoose';

const { DB_USER, DB_PASS } = process.env;

if (!DB_USER && !DB_PASS) throw new Error('Credential are not defined.');

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

const dbConnect = async () => {
  if (cached.conn) return cached.conn;
  const connectionOptions = {
    dbName: `solidNews`,
  }

  const connectionUri = `mongodb+srv://${encodeURIComponent(DB_USER)}:${encodeURIComponent(DB_PASS)}@sunnotracks.94qrcpx.mongodb.net/?retryWrites=true&w=majority&appName=solidNews`;
  cached.conn = await connect(connectionUri, connectionOptions);

  return cached.conn;
};
export default dbConnect;
