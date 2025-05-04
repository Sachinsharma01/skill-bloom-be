
# 📘 Sequelize CLI Commands Cheat Sheet

Sequelize CLI is a powerful tool for managing database operations in Node.js applications. It facilitates tasks like initializing projects, creating models, running migrations, and seeding data.

---

## 🛠️ Installation

Install Sequelize CLI as a development dependency:

```bash
npm install --save-dev sequelize-cli
```

---

## 📁 Project Initialization

Set up the project structure with necessary directories and configuration files:

```bash
npx sequelize-cli init
```

This command creates the following folders:

- `config/` – Database configuration
- `models/` – Sequelize models
- `migrations/` – Migration files
- `seeders/` – Seed files

---

## 🧱 Model and Migration Generation

Generate a new model along with its corresponding migration:

```bash
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

This creates:

- `models/user.js` – The User model
- `migrations/XXXXXXXXXXXXXX-create-user.js` – Migration file for creating the Users table

---

## 🔄 Migrations

### Run Migrations

Apply all pending migrations to the database:

```bash
npx sequelize-cli db:migrate
```

### Undo Last Migration

Revert the most recent migration:

```bash
npx sequelize-cli db:migrate:undo
```

### Undo All Migrations

Revert all applied migrations:

```bash
npx sequelize-cli db:migrate:undo:all
```

### Migration Status

List the status of all migrations:

```bash
npx sequelize-cli db:migrate:status
```

---

## 🌱 Seeders

### Generate Seeder

Create a new seed file:

```bash
npx sequelize-cli seed:generate --name demo-user
```

### Run All Seeders

Execute all seed files to populate the database:

```bash
npx sequelize-cli db:seed:all
```

### Run Specific Seeder

Execute a specific seed file:

```bash
npx sequelize-cli db:seed --seed name-of-seed-file.js
```

### Undo Last Seeder

Revert the most recent seed operation:

```bash
npx sequelize-cli db:seed:undo
```

### Undo All Seeders

Revert all seed operations:

```bash
npx sequelize-cli db:seed:undo:all
```

---

## 🗄️ Database Management

### Create Database

Create the database as specified in the configuration:

```bash
npx sequelize-cli db:create
```

### Drop Database

Drop the database:

```bash
npx sequelize-cli db:drop
```

---

For more detailed information and advanced usage, refer to the official Sequelize CLI documentation:

🔗 [Sequelize CLI Documentation](https://sequelize.org/docs/v7/cli/)
