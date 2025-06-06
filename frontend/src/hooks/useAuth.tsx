
import { useSession } from '@/providers/SessionProvider'

export const useAuth = () => {
  const session = useSession()
  
  return {
    ...session,
    isLoggedIn: session.isAuthenticated
  }
}
