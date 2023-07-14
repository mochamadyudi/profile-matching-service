import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import yesno from 'yesno';
import { exec  } from 'child_process';

(async function(){

  await yesno({
    question: 'Are you sure you want to continue? y/n',
    defaultValue:null,
    yesValues:['y','Y','yes'],
    invalid: function ({ question, defaultValue, yesValues, noValues }) {
      process.stdout.write("\n Whoa. That was not a good answer. Well. No more tries for you.");
      process.exit(1);
    }
  }).then((value)=> {
    if(value){

      let installProcess = exec(` cd ${path.join(__dirname,'..')} && npm run build:template`, (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }


        let entries = []
        fs.readdirSync(path.join(__dirname,'views','template'))
          .forEach((file)=> {

            fs.readdirSync(path.join(__dirname,'views','template',file))
              .forEach((child)=> {
                if(fs.lstatSync(path.join(__dirname,'views','template',file,child)).isFile()){
                  entries.push({
                    src:path.join(__dirname,'views','template',file,child),
                    dest:path.resolve(__dirname,'..','dist',file,child)
                  })
                }
              })
          })

        for(let i = 0; i < entries.length;i++){
          let {
            src,
            dest
          } = entries[i]
          console.log(
            chalk.greenBright(`
${chalk.greenBright('Source:')} ${src}
${chalk.greenBright('Destination:')} ${dest}`))
          fs.copyFile(src,dest, function(err){
            if(err) throw err
          })
        }

        console.log(
          chalk.greenBright(`
${chalk.greenBright(`=================================================`)}
${chalk.greenBright('Message')}: [ ${chalk.whiteBright.bgCyanBright(`   Copy All files Success `)} ]
${chalk.greenBright('Author:')} ${chalk.cyanBright('Mochamad Yudi sobari')}
${chalk.greenBright('boilerplate:')} ${chalk.whiteBright('CORE@2022')}
${chalk.greenBright('Github:')} ${chalk.cyanBright('http://github.com/mochamadyudi')}
${chalk.greenBright(`=================================================`)}`))


        return stdout
      });
      installProcess.stdout.on('data', data =>   console.log(data))

    }
  })

})()