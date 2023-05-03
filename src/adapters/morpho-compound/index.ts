import type { Adapter } from '@lib/adapter'

import * as ethereum from './ethereum'

const adapter: Adapter = {
  id: 'morpho-compound',
  ethereum,
}

export default adapter
