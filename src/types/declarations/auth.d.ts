import type {} from '../../services/Auth'

declare module '../../services/Auth' {
  interface ActionsAuth {
    authorize: (token?: string) => Promise<UserModel>
    loadUser: () => Promise<UserModel>
    login: (data: SignInDTO) => Promise<string>
    loginGoogle: (jwt: string) => Promise<string>
    register: (data: SignUpDTO) => Promise<UserModel>
    registerCakeMaker: (
      data: SignUpCakeMakerDTO,
      package_id: string
    ) => Promise<CakeMakerModel>
    logout: () => void
    getToken: () => string
    getTokenData: () => JwtModel
    setToken: (token: string) => void
  }

  interface SelectorsAuth {
    isAdmin: () => boleen
    hasRole: (role: string) => boolean
    getUserName: () => string
    isLoadedUser: () => boolean
  }

  interface RolesAuth {
    user: 'user'
    admin: 'admin'
  }
}
