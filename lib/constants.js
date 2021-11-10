import { BitcoinUtil } from './util.js'
const bUtil = new BitcoinUtil()

// Ideal time between blocks.
export const BLOCK_TIME = 1000 // 1 sec

// Halving schedule.
export const REWARD_HALVING_SCHEDULE = 20 // 20 blocks

// Maximum number of transactions per block.
export const BLOCK_SIZE_LIMIT = 10

export const GENESIS_BLOCK: BlockType = {
  parentid: null,
  id: 'GENESIS',
  miner: 'SATOSHI',
  index: 1,
  time: bUtil.now(),
  elapsed: 0,
  transactions: [],
  difficulty: 1,
  reward: 1024
}

export const PRICE_FORMULA = (days) => 10 ** (2.9065 * Math.log(days) - 19.493)
