interface IUser {
  id: number
  name: string
}

type TUser = {
  id: number
  email: string
}

const foo = (user: IUser) => {
  console.log(`id = ${user.id}`)
  console.log(`name = ${user.name}`)
}

const bar = (user: TUser) => {
  console.log(`id = ${user.id}`)
  console.log(`email = ${user.email}`)
}


foo({id: 1, name: 'Arch'})
bar({id: 1, email: 'Gentoo'})
