const ROUTES = {
  home: '/',
  professionals: '/professionals',

  // auth
  signIn: '/sign-in',
  signUp: '/sign-up',
  signUpVerify: '/verify',
  confirmationEmail: '/email-confirmation',
  forgotPassword: '/forgot-password',
  forgotPasswordVerify: '/forgot-password/successful',
  resetPassword: '/reset-password',
  resetPasswordVerify: '/reset-password/successful',

  // profile
  profile: '/professional-account',
  details: '/profile/details',
  // calendar: '/profile/calendar',
  // requests: '/profile/requests',
  // payment: '/profile/requests/payment',
  // chat: '/profile/chat',
  // orders: '/profile/orders',
  review: '/profile/reviews',
  // settings: '/profile/settings',
  // favourites: '/profile/favourites',
  dashboard: '/profile/dashboard',

  students: '/students',
  courses: '/courses',
  learn: '/learn',
  search: '/search',
  media: '/media',
  subscription: '/subscription',

  // static pages
  terms: '/terms',
  privacy: '/privacy',
  aboutUs: '/about-us',
  cancellation: '/cancellation-policy',
  subscribeToUpdates: '/subscribe-to-updates'
}

export default ROUTES
