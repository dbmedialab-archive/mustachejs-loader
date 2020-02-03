import mustachejsLoader from '../src'
import wpCompiler from './compiler'

describe('Mustachjs loader function', () => {
  it('returns the script', async () => {
    const stats = await wpCompiler('template.mustache')
    const output = stats.toJson().modules[0].source
    expect(output).toMatch(/\{\{helloWorld\}\}/)
  })

  it('is a function', async () => {
    const mjsl = mustachejsLoader.apply({ query: {} }, ['template'])
    eval(mjsl)
    expect(module.exports).toBeDefined()
    expect(typeof module.exports).toBe('function')
  })

  it('replaces variables', async () => {
    const mjsl = mustachejsLoader.apply({ query: {} }, ['{{ variable }}'])
    eval(mjsl)
    expect(module.exports({ variable: 'Hello!' })).toBe('Hello!')
  })

  it('works with partials', async () => {
    const mjsl = mustachejsLoader.apply({ query: {} }, ['{{ variable }}{{ > part }}'])
    eval(mjsl)
    expect(module.exports({ variable: 'Hello' }, { part: '!' })).toBe('Hello!')
  })
})
