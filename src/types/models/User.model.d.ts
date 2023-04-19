interface UserModel {
  id: string
  email: string
  role: string
  confirmed: boolean
  full_name?: string
  first_name?: string
  last_name?: string
  phone_number: string
  avatar: AvatarModel
  isLoaded: boolean
}
interface AvatarModel {
  id?: string
  url: string
  name: string
  _destroy?: boolean
}

interface JwtModel {
  id: string
  role: string
  confirmed: boolean
}

interface StudentModel extends Omit<UserModel, 'full_name'> {
  id: string
  verified: boolean
  first_name: string
  last_name: string
  location_address?: LocationAddress
}

interface LocationAddress {
  label: string
  location: {
    lat: number
    lng: number
  }
  street_number: string
  street_name: string
  city: string
  state: string
  country: string
  zip_code: string
  id: string
}
