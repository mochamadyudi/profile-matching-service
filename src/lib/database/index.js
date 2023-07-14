const db = require('./models/index');
const chalk = require('chalk')

/**
 * @name Database-Connection
 */
db.sequelize.authenticate()
  .then(async () => {
    console.log(
      chalk.greenBright(`
${chalk.greenBright(`=================================================`)}
${chalk.whiteBright('Connected :')} ${process.env.DB_NAME} database has been established successfully 
${chalk.greenBright(`=================================================`)}`))
  })
  .catch((err) => {
    console.log(
      chalk.red(`
${chalk.red(`=================================================`)}
${chalk.redBright('Error :')} ${process.env.DB_NAME} database error connected 
${chalk.red(`=================================================`)}`))
  })


const Database = db;

export {
    Database
}