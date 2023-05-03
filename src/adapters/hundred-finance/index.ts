import type { Adapter } from '@lib/adapter'

import * as arbitrum from './arbitrum'
import * as ethereum from './ethereum'
import * as fantom from './fantom'
import * as optimism from './optimism'
import * as polygon from './polygon'

const adapter: Adapter = {
  id: 'hundred-finance',
  arbitrum,
  ethereum,
  fantom,
  optimism,
  polygon,
}

// TODO: Stake(+/- gauge)
// https://docs.hundred.finance/

export default adapter
