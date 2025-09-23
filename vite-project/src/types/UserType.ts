type User = {
    id: number,
    username: string,
    email: string
}

type UserCardProps = {
    userToShow: User,
    hide: boolean
}

export type {UserCardProps, User};