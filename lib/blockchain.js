/*
  Class library governing blocks.
*/

import TreeNode from './tree.js'
import { BitcoinUtil } from './util.js'

import {
  GENESIS_BLOCK,
  BLOCK_TIME,
  REWARD_HALVING_SCHEDULE
} from './constants.js'

class Blockchain {
  constructor () {
    this.root = new TreeNode(GENESIS_BLOCK)

    // Encapsulate dependencies
    this.bUtil = new BitcoinUtil()
  }

  getBlocks () {
    return this.root
  }

  async createBlock (miner, signedTransactions) {
    const { id, index, time, elapsed, reward, difficulty } =
      root.getLongestBranchValue()

    const blockCandidate = {
      miner,
      parentid: id,
      index: index + 1,
      id: this.bUtil.uniqueID(),
      time: this.bUtil.now(),
      elapsed: this.bUtil.now() - time,
      transactions: signedTransactions,
      difficulty: difficulty + (elapsed > BLOCK_TIME ? -1 : +1),
      reward: this.bUtil.divisibleBy(index, REWARD_HALVING_SCHEDULE)
        ? reward / 2
        : reward
    }
  }
}

export default Blockchain
