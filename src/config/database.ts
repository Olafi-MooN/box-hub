import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database2.db');

export { db }
