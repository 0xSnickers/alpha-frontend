import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { bsc } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "" // this is a public projectId only to use on localhost

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [bsc] as [AppKitNetwork, ...AppKitNetwork[]]

export const ethersAdapter = new EthersAdapter();
