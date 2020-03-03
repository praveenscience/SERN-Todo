const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./todos.sqlite3", err => {
  if (err) {
    console.log("Error when creating the database", err);
  } else {
    console.log("Database created!");
    createTable();
  }
});

const createTable = () => {
  db.run("CREATE TABLE IF NOT EXISTS `todos` ( `id` INTEGER PRIMARY KEY AUTOINCREMENT, `content` TEXT, `done` INTEGER)", initialiseData);
};

const initialiseData = () => {
  console.log("Table created!");
  const DummyTodos = ["Get Milk", "Get Eggs", "Get Kittens"];
  db.all("SELECT * FROM `todos`", (err, rows) => {
    if (rows.length === 0) {
      db.run("DELETE FROM `todos`", () => {
        db.run("DELETE FROM `sqlite_sequence` WHERE `name`='todos'", () => {
          DummyTodos.forEach(todo => {
            db.run("INSERT INTO `todos` (`content`, `done`) VALUES (?, ?)", [todo, 0]);
          });
          console.log("Dummy data added!");
        });
      });
    }
  });
};

const runSqlGetJson = (sql, params, res, mapper = a => a) => {
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json(rows.map(mapper));
    }
  });
};

const runSqlExecJson = (sql, params, res, mapper = a => a) => {
  db.run(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      if (rows) res.json(rows.map(mapper));
      else res.json({ success: true });
    }
  });
};

module.exports = { runSqlGetJson, runSqlExecJson };
