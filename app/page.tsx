import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import SignOutButton from './components/SignOutButton'
import Chat from './components/Chat'

export default async function HomePage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome, {user.email}!
          </h1>
          <SignOutButton />
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <Chat />
        </div>
      </div>
    </div>
  )
}
