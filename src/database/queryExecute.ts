import { db } from "../config/database"

const createTables = `
-- Inventories
CREATE TABLE IF NOT EXISTS Inventories (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT not null,
  quantity NUMERIC not null,
  unityMeasure TEXT not null,
	created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER IF NOT EXISTS inventories_updated_at
AFTER UPDATE
ON Inventories FOR EACH ROW
BEGIN
  UPDATE Inventories SET updated_at = current_timestamp
    WHERE id = old.id;
END;



-- Ingredients
CREATE TABLE IF NOT EXISTS Ingredients (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT not null,
  quantity NUMERIC not null,
  inventoryId INTEGER not null,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

	FOREIGN KEY (inventoryId) REFERENCES Inventories (id)
);

CREATE TRIGGER IF NOT EXISTS ingredients_updated_at
AFTER UPDATE
ON Ingredients FOR EACH ROW
BEGIN
  UPDATE Ingredients SET updated_at = current_timestamp
    WHERE id = old.id;
END;



-- Recipes
CREATE TABLE IF NOT EXISTS Recipes (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
	ingredientId INTEGER NOT NULL,
	created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

	FOREIGN KEY (ingredientId) REFERENCES Ingredients (id)
);

CREATE TRIGGER IF NOT EXISTS recipes_updated_at
AFTER UPDATE
ON Recipes FOR EACH ROW
BEGIN
  UPDATE Recipes SET updated_at = current_timestamp
    WHERE id = old.id;
END;`

db.transaction(
  (tx => tx.executeSql(createTables)),
  (err) => {
    if (err) throw new Error(JSON.stringify(err));
  },
  () => console.log('Tables created successful 🧤'));