import type {
  QueryResolvers,
  MutationResolvers,
  IdolResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const idols: QueryResolvers['idols'] = () => {
  return db.idol.findMany()
}

export const idol: QueryResolvers['idol'] = ({ id }) => {
  return db.idol.findUnique({
    where: { id },
  })
}

export const createIdol: MutationResolvers['createIdol'] = ({ input }) => {
  return db.idol.create({
    data: input,
  })
}

export const updateIdol: MutationResolvers['updateIdol'] = ({ id, input }) => {
  return db.idol.update({
    data: input,
    where: { id },
  })
}

export const deleteIdol: MutationResolvers['deleteIdol'] = ({ id }) => {
  return db.idol.delete({
    where: { id },
  })
}

export const Idol: IdolResolvers = {
  photos: (_obj, { root }) =>
    db.idol.findUnique({ where: { id: root.id } }).photos(),
}
