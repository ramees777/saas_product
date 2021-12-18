const { writeFileSync } = require("fs");
const { createInterface } = require("readline");



const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
console.table(['controller', 'interface', 'models', 'routes'])
rl.question("Enter Choice ? ", function (index) {
    console.log(typeof index);
    switch (+index) {
        case 0:
            rl.question("Enter Controller Name :", function (name) {
                writeFileSync(__dirname + `/controllers/${name}.ts`, '')
                rl.close();

            })
            break;
        case 1:
            rl.question("Enter Interface Name :", function (name) {
                writeFileSync(__dirname + `/interface/${name}.ts`, '')
                rl.close();

            })
            break;
        case 2:
            rl.question("Enter Model Name :", function (name) {
                writeFileSync(__dirname + `/models/${name}.ts`, '')
                rl.close();

            })
            rl.close();
            break;
        case 3:
            rl.question("Enter Routes Name :", function (name) {
                writeFileSync(__dirname + `/routes/${name}.ts`, '')
                rl.close();

            })
            rl.close();
            break;
        default:
            console.log('Enter  between 0 and 3');
            rl.close()
    }
});

rl.on("close", function () {
    process.exit(0);
});