import { idols, idol, createIdol, updateIdol, deleteIdol } from './idols'
import type { StandardScenario } from './idols.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('idols', () => {
  scenario('returns all idols', async (scenario: StandardScenario) => {
    const result = await idols()

    expect(result.length).toEqual(Object.keys(scenario.idol).length)
  })

  scenario('returns a single idol', async (scenario: StandardScenario) => {
    const result = await idol({ id: scenario.idol.one.id })

    expect(result).toEqual(scenario.idol.one)
  })

  scenario('creates a idol', async () => {
    const result = await createIdol({
      input: { name: 'String2596958' },
    })

    expect(result.name).toEqual('String2596958')
  })

  scenario('updates a idol', async (scenario: StandardScenario) => {
    const original = await idol({ id: scenario.idol.one.id })
    const result = await updateIdol({
      id: original.id,
      input: { name: 'String4815832' },
    })

    expect(result.name).toEqual('String4815832')
  })

  scenario('deletes a idol', async (scenario: StandardScenario) => {
    const original = await deleteIdol({ id: scenario.idol.one.id })
    const result = await idol({ id: original.id })

    expect(result).toEqual(null)
  })
})
