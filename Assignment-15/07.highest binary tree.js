// write a program to find the height of a binary tree
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Function to calculate the height of a binary tree
  function findHeight(node) {
    if (node === null) {
      return 0; // Height of an empty tree is 0
    } else {
      // Recursively calculate the height of the left and right subtrees
      const leftHeight = findHeight(node.left);
      const rightHeight = findHeight(node.right);
  
      // Return the maximum height of the left and right subtrees, plus 1 (for the current node)
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
  
  // Helper function to create a sample binary tree
  function createSampleTree() {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    return root;
  }
  
  const root = createSampleTree();
  const height = findHeight(root);
  console.log("Height of the binary tree is:", height);
  