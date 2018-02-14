const chalk = require('chalk')

console.log(chalk.blue('Current commands available:\n'))

console.log(chalk.yellow('  dev'), '         ', chalk.green('// Start devServer'))
console.log(chalk.yellow('  dev:https'), '   ', chalk.green('// Start devServer with https'))
console.log(chalk.yellow('  build'), '       ', chalk.green('// Build for production'))
console.log(chalk.yellow('  server'), '      ', chalk.green('// Run server with watch'))
console.log(chalk.yellow('  both'), '        ', chalk.green('// Run devServer & server with watch'))
console.log(chalk.yellow('  test'), '        ', chalk.green('// Run tests with coverage'))
console.log(chalk.yellow('  test:watch'), '  ', chalk.green('// Run tests with watch'))

console.log(chalk.blue('\nHappy hunting!\n'))
