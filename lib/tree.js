/*
  Implements the Tree data structure used to define the blockchain.
  https://en.wikipedia.org/wiki/Tree_(data_structure)
*/

class TreeNode {
  constructor (value) {
    this.value = value
    this.defaultNode = () => {}
    this.branches = []

    this.node = defaultNode
  }

  // Add a child node to the tree.
  addChildNode (childNode) {
    this.branches.push(childNode)
    childNode.setParent(this.node)
  }

  addChildNodeByValue (val) {
    const node = new Tree(val)
    this.addChildNode(node)
  }

  getValue () {
    return this.value
  }

  // Returns the parent of this node, or the node, if it has no parent.
  getParent () {
    return this.parent || this.node
  }

  // Set the parent node of this node.
  setParent (parentNode) {
    this.parent = parentNode
  }

  // Traverse the DAG and find the root of the tree.
  getRoot () {
    let root = this.node

    while (true) {
      const newRoot = root.getParent()
      if (newRoot && newRoot !== root) {
        root = newRoot
      } else {
        break
      }
    }

    return root
  }

  // Get the longest branch of the tree. This is the 'right' branch.
  // This function recursively calls itself to find the longest branch.
  // Returns an object containing both the node and length.
  getLongestBranchAndLength () {
    let longestBranch = {
      length: 0,
      node: this.node
    }

    for (let i = 0; i < this.branches.length; i++) {
      const branch = branches[i]

      const longestSubBranch = branch.getLongestBranchAndLength()

      if (!longestBranch || longestSubBranch.length >= longestBranch.length) {
        longestBranch = longestSubBranch
      }
    }

    return longestBranch
  }

  // Returns the node at the end of a the longest branch.
  getLongestBranchNode () {
    const node = this.node.getLongestBranchAndLength()
    return node
  }

  // Returns the value of the node at the end of the longest branch.
  getLongestBranchValue () {
    const node = this.node.getLongestBranchAndLength()
    return node.value
  }

  // Recursively calls itself to find a node.
  // Input 'predicate' is a function that returns true or false.
  find (predicate) {
    if (predicate(this.node)) {
      return this.node
    }

    for (let i = 0; i < this.branches.length; i++) {
      const branch = this.branches[i]

      const result = branch.find(predicate)

      if (result) {
        return result
      }
    }
  }

  // Find a node by its value.
  findByValue (predicate) {
    return this.find((node) => predicate(node.getValue()))
  }

  // Given a node ID, return the nodes value
  findByValueId (id) {
    return this.findByValue((value) => value.id === id)
  }

  // Get the blockchain from tip to genesis.
  getChain () {
    let current = this.node
    const nodes = []

    while (current) {
      const parent = current.getParent()
      if (parent === current) {
        break
      }
      nodes.unshift(current)
      current = parent
    }

    return nodes
  }

  getLongestChain () {
    const node = this.getLongestBranchNode()
    const chain = node.getChain()
    return chain
  }

  getLongestChainAsValues () {
    const node = this.getLongestBranchNode()
    const chain = node.getChain()
    const values = chain.map((node) => node.getValue())
    return values
  }
}

export default TreeNode
