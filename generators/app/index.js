const Generator = require('yeoman-generator')
module.exports = class extends Generator{
    prompting(){
        return this.prompt([
            {    
               type:'input',
               name:'name',
               message:'Your project name',
               default:this.appname
           }
        ])
        .then(answers=>{
            this.answers = answers;
        })
    }
    writing (){
        const templates = [
            'tsconfig.json',
            'README.md',
            'package.json',
            'package-lock.json',
            'babel.config.js',
            '.gitignore',
            '.eslintrc.js',
            '.browserslistrc',
            'src/App.vue',
            'src/main.ts',
            'src/shims-vue.d.ts',
            'src/views/About.vue',
            'src/views/Home.vue',
            'src/store/index.ts',
            'src/router/index.ts',
            'src/components/HelloWorld.vue',
            'src/assets/logo.png',
            'public/favicon.ico',
            'public/index.html'
        ]
        templates.forEach(item=>{
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}


















