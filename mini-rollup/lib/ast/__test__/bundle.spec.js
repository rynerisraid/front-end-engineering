const Bundle = require('../bundle')
const fs = require('fs')

jest.mock('fs')

describe('测试 Bundle', () => {
    test('fetchModule',()=>{
        const bundle = new Bundle({ entry: './a.js' })
        // fs.readFileSync 本质上是读文件的方法
        // 如果一旦mock之后，在这个语句执行之后，一定会返回所编辑的内容
        fs.readFileSync.mockReturnValueOnce(`const a = 1;`)
        const module = bundle.fetchModule('index.js')

        const { calls } = fs.readFileSync.mock
        
        expect(calls[0][0]).toBe('index.js')

        //加载模块
        expect(module.code.toString()).toBe(`const a = 1;`)
    })

    describe('build', () => {

        test('单语句',()=>{
            const bundle = new Bundle({ entry: 'index.js' })
            fs.readFileSync.mockReturnValueOnce(`console.log(1)`)
            bundle.build('bundle.js')
            const { calls } = fs.writeFileSync.mock
            expect(calls[0][0]).toBe('bundle.js')
            expect(calls[0][1]).toBe('console.log(1)')
        })
        
        test('多语句',()=>{
            const bundle = new Bundle({ entry: 'index.js' })
            jest.mock("fs");
            const code =`const a = () => 1;const b = () => 2;a();`
            fs.readFileSync.mockReturnValue(code)
            fs.writeFileSync.mock.calls = []
            bundle.build('bundle.js')
            const { calls } = fs.writeFileSync.mock
            expect(calls[0][0]).toBe('bundle.js')
            expect(calls[0][1]).toBe(`const a = () => 1;\na();`)
            
        })


        test('多模块', () => {
            const bundle = new Bundle({ entry: 'index.js' })
            fs.readFileSync
                .mockReturnValueOnce(`import { a } from "./a";
                a();`)
                .mockReturnValueOnce(`export const a = () => 1;`)
            fs.writeFileSync.mock.calls = []
            bundle.build('bundle.js')
            const { calls } = fs.writeFileSync.mock
            expect(calls[0][0]).toBe('bundle.js')
            expect(calls[0][1]).toBe(`const a = () => 1;\na();`)
        })


    });
    
    
});
