import { useStore } from '~/store'
import { Header } from '~/components/Header'

export default function Index() {
  const { user, appconfig } = useStore()
  console.log(JSON.stringify({ appconfig, user }))
  return (
    <div>
      <Header />
      <h1>Explorer</h1>
    </div>
  )
}
