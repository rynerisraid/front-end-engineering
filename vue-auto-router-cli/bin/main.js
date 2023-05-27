#!/usr/bin/env node

/*
 *  程序的入口:
 *  执行shell的时候要求执行js文件
 *  需要指定js 执行的解释器
 * 
 */
console.log('vue auto ...')


import { program } from 'commander'
import config from '../package.json' assert {type:'json'}
import create from './create.js'
import refresh from './refresh.js'

program.version(`version is ${config.version}`)
    
/**
 * 命令行定制的时候解析命令
 */

program
    .command('create <name>')
    .description('🔥 create a new project powered by vue-auto cli')
    .action(create)

program.command('refresh <name>')
    .description(' 🔥 GenRouter')
    .action(refresh)


program.parse(process.argv)

