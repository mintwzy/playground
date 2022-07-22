import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PhotoCreateArgs>({
  photo: {
    one: {
      data: {
        path: 'String7209676',
        idol: { create: { name: 'String9392479' } },
      },
    },
    two: {
      data: {
        path: 'String5319334',
        idol: { create: { name: 'String2831747' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
