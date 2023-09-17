class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Function to check if two binary trees are identical
  function areIdentical(root1, root2) {
    // If both trees are empty, they are identical
    if (root1 === null && root2 === null) {
      return true;
    }
  
    // If one tree is empty and the other is not, they are not identical
    if (root1 === null || root2 === null) {
      return false;
    }
  
    // Check if the values of the current nodes are equal
    if (root1.value !== root2.value) {
      return false;
    }
  
    // Recursively check the left and right subtrees
    return (
      areIdentical(root1.left, root2.left) && areIdentical(root1.right, root2.right)
    );
  }
  
  // Helper function to create sample binary trees
  function createSampleTrees() {
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(3);
  
    const tree2 = new TreeNode(1);
    tree2.left = new TreeNode(2);
    tree2.right = new TreeNode(3);
  
    return { tree1, tree2 };
  }
  
  const { tree1, tree2 } = createSampleTrees();
  const result = areIdentical(tree1, tree2);
  
  if (result) {
    console.log("The two binary trees are identical.");
  } else {
    console.log("The two binary trees are not identical.");
  }
  