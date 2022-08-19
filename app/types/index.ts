import type { AppConfig } from '~/app-config'

export type Address = string
export type Network = string
export type AppUser = {
  address: Address
  network: Network
} | null

export type AppSessionData = {
  appconfig: AppConfig
}
