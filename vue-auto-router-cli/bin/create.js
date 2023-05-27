
/**
 * 从git上下载一个脚手架，创建一个新的模块来完成
 */
import clear from 'clear'
import figlet from 'figlet'
import chalk from 'chalk'
import { promisify } from 'util'
import down from 'download-git-repo'
import ora from 'ora'
import { spawn } from 'child_process'


const log = content => console.log(chalk.green(content))
export default async function create(name){
    // 打印欢迎界面
    /**
     * pnpm i figlet clear chalk
     * figlet
     * clear 清除
     * chalk 粉笔
     */
    clear()
    const banner = figlet.textSync('Vue Auto!')

    log(banner)
    //实现克隆脚手架
    // 克隆代码
    log('🚀 创建项目:' + name)
    // 从github克隆项目到指定文件夹
    //await clone('github:su37josephxia/vue-template', name)

    //下载依赖 -> 调用其他命令 npm i 命令
    //回调风格 await
    //日志属于 子进程日志，直接调用不会显示，需要日志流对接
    log(`🎁 安装依赖`)
    //await asyncSpawn('npm',['install'], {cwd:`./${name}`})
    //await asyncSpawn(process.platform === "win32" ? "npm.cmd" : "npm",['install'],{cwd:`./${name}`});
    log(`
    🆗 安装完成
    To get Start:
    ====================================
    cd ${name}
    npm run serve
    ====================================
    `)

    //打开浏览器
    //open('http://localhost:8080')
    //await asyncSpawn(process.platform === "win32" ? "npm.cmd" : "npm",['serve'],{cwd:`./${name}`});
    

}

async function clone(repo, desc){
    const download = promisify(down);
    const process = ora(`🚚下载...${repo}`)
    process.start()
    await download(repo,desc)
    process.succeed()
}

/**
 * 封装新的spawn 把执行流的结果通过pipe返回给主进程
 * @param  {...any} args 
 * @returns 
 */
async function asyncSpawn(...args){
    return new Promise(resolve=>{
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close',()=>{
            resolve()
        })
    })
}
