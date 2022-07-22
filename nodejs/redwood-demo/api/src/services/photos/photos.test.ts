import { photos, photo, createPhoto, updatePhoto, deletePhoto } from './photos'
import type { StandardScenario } from './photos.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('photos', () => {
  scenario('returns all photos', async (scenario: StandardScenario) => {
    const result = await photos()

    expect(result.length).toEqual(Object.keys(scenario.photo).length)
  })

  scenario('returns a single photo', async (scenario: StandardScenario) => {
    const result = await photo({ id: scenario.photo.one.id })

    expect(result).toEqual(scenario.photo.one)
  })

  scenario('creates a photo', async (scenario: StandardScenario) => {
    const result = await createPhoto({
      input: { path: 'String4921491', idolId: scenario.photo.two.idolId },
    })

    expect(result.path).toEqual('String4921491')
    expect(result.idolId).toEqual(scenario.photo.two.idolId)
  })

  scenario('updates a photo', async (scenario: StandardScenario) => {
    const original = await photo({ id: scenario.photo.one.id })
    const result = await updatePhoto({
      id: original.id,
      input: { path: 'String58503112' },
    })

    expect(result.path).toEqual('String58503112')
  })

  scenario('deletes a photo', async (scenario: StandardScenario) => {
    const original = await deletePhoto({ id: scenario.photo.one.id })
    const result = await photo({ id: original.id })

    expect(result).toEqual(null)
  })
})
