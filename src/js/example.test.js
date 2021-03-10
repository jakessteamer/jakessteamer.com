import { sum } from './example'

describe('sum function', () => {
  test('2 + 2 = 4', () => {
    expect(sum(2, 2)).toBe(4)
  })

  test('3 + 2 = 5', () => {
    expect(sum(3, 2)).toEqual(5)
  })

  test('10 + -10 < 1', () => {
    expect(sum(10, -10)).toBeLessThan(1)
  })
})
