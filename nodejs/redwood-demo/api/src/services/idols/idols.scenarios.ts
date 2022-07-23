import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.IdolCreateArgs>({
  idol: {
    one: { data: { name: 'String5126692' } },
    two: { data: { name: 'String7887732' } },
  },
})

export type StandardScenario = typeof standard
