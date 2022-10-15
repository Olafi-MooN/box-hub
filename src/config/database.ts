import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database1.db');

export { db }
