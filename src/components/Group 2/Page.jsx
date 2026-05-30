import { useLocation } from 'react-router-dom'
import ProfileProvider from './context/ProfileProvider'
import ThemeProvider from './context/ThemeProvider'
import Navbar from './components/Navbar/Navbar'
import ProfileHeader from './components/ProfileHeader/ProfileHeader'
import Tabs from './components/Tabs/Tabs'
import PostsGrid from './components/PostsGrid/PostsGrid'
import CompletedHelp from './pages/CompletedHelp'
import CommunityReferences from './pages/CommunityReferences'
import Feed from './pages/Feed'
import Privacy from './pages/Privacy'
import Guidelines from './pages/Guidelines'
import Support from './pages/Support'
import Footer from './components/Footer/Footer'
import './App.css'
import './index.css'

const pageMap = {
  '/feed': Feed,
  '/profile': PostsGrid,
  '/profile/completed-help': CompletedHelp,
  '/profile/community-references': CommunityReferences,
  '/privacy': Privacy,
  '/guidelines': Guidelines,
  '/support': Support,
}

function AppLayout() {
  const location = useLocation()

  const isProfilePage =
    location.pathname === '/profile' ||
    location.pathname === '/profile/completed-help' ||
    location.pathname === '/profile/community-references'

  const PageContent = pageMap[location.pathname] || PostsGrid

  return (
    <div className="app">
      <Navbar />
      {isProfilePage && (
        <>
          <ProfileHeader />
          <Tabs />
        </>
      )}
      <PageContent />
      <Footer />
    </div>
  )
}

function Page() {
  return (
    <ThemeProvider>
      <ProfileProvider>
        <AppLayout />
      </ProfileProvider>
    </ThemeProvider>
  )
}

export default Page
