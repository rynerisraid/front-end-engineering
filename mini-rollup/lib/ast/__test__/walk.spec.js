const walk = require('../walk')

describe('测试 walk函数',()=>{
    it('单个节点', () => {
        
        const ast ={
            a: 1
        }

        const enter = jest.fn()
        const leave = jest.fn()

        walk(ast,{ enter, leave})
        // 证明
        let calls = enter.mock.calls
        
        expect(calls.length).toBe(1)
        expect(calls[0][0]).toEqual({a:1})

        calls = leave.mock.calls
        expect(calls.length).toBe(1)
        expect(calls[0][0]).toEqual({a:1})


    });

    it('多个节点', () => {
        
        const ast ={
            a: [
                {
                    b:2
                }
            ]
        }

        const enter = jest.fn()
        const leave = jest.fn()

        walk(ast,{ enter, leave})
        // 证明
        let calls = enter.mock.calls
        
        expect(calls.length).toBe(3)
        expect(calls[0][0]).toEqual({a: [{b:2}]})
        expect(calls[1][0]).toEqual([{b:2}])
        expect(calls[2][0]).toEqual({b:2})

        calls = leave.mock.calls

        expect(calls.length).toBe(3)
        expect(calls[0][0]).toEqual({b:2})
        expect(calls[1][0]).toEqual([{b:2}])
        expect(calls[2][0]).toEqual({a: [{b:2}]})


    });
    
})