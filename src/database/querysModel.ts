import { SQLResultSet } from "expo-sqlite";
import { db } from "../config/database";

const sqlite = () => {

  const insert = (tableName: string, columns: string[], values: any): Promise<SQLResultSet> => {
    return new Promise((resolve) => {
      const data = `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${Array(columns.length).fill('?').join(', ')})`;
      db.transaction(
        (tx => tx.executeSql(
          data,
          [...Object.values(values) as any],
          (tx, result) => {
            if (result) {
              resolve(result);
            }
          }
        )),
        (err) => {
          if (err) throw new Error(JSON.stringify(err));
        })
    })
  }

  const selectAll = (tableName: string): Promise<SQLResultSet> => {
    const sql = `SELECT * FROM ${tableName};`
    return new Promise(resolve => {
      db.transaction(tx => {
        tx.executeSql(
          sql,
          undefined,
          (tx, res) => resolve(res),
          err => { throw new Error(JSON.stringify(err)) })
      })
    })
  }

  return {
    insert,
    selectAll
  }
}

export { sqlite };