const {flat} = require('./index')

describe('flat function', () => {
    test('simple array', () => {
        const actual = [1, 2, 3]
        const expected = [1, 2, 3]

        expect(flat(actual)).toStrictEqual(expected)
    })

    test('complex array with depth', () => {
        const actual = [1, 2, 3, [1, 2, ['a', {},6,[7,[],9]]],[9,8]]
        const expected = [1, 2, 3, 1, 2, 'a', {}, 6, 7, 9, 9, 8]


        expect(flat(actual)).toStrictEqual(expected)
    })

    describe('edges', () => {
        test('no input param', () => {
            const expected = undefined

            expect(flat()).toStrictEqual(expected)
        })
        test('empty array input', () => {
            const actual = []
            const expected = []

            expect(flat(actual)).toStrictEqual(expected)
        })
        test('number input', () => {
            const actual = 1
            const expected = 1

            expect(flat(actual)).toStrictEqual(expected)
        })
        test('char input', () => {
            const actual = 'a'
            const expected = 'a'

            expect(flat(actual)).toStrictEqual(expected)
        })
        test('object input', () => {
            const actual = {}
            const expected = {}

            expect(flat(actual)).toStrictEqual(expected)
        })
        test('null input', () => {
            const actual = null
            const expected = null

            expect(flat(actual)).toStrictEqual(expected)
        })
    })
})