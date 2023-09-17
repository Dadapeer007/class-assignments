class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
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
  
  // Inorder Traversal (Left -> Root -> Right)
  function inorderTraversal(node) {
    if (node === null) return;
    inorderTraversal(node.left);
    console.log(node.value);
    inorderTraversal(node.right);
  }
  
  // Preorder Traversal (Root -> Left -> Right)
  function preorderTraversal(node) {
    if (node === null) return;
    console.log(node.value);
    preorderTraversal(node.left);
    preorderTraversal(node.right);
  }
  
  // Postorder Traversal (Left -> Right -> Root)
  function postorderTraversal(node) {
    if (node === null) return;
    postorderTraversal(node.left);
    postorderTraversal(node.right);
    console.log(node.value);
  }
  
  const root = createSampleTree();
  
  console.log("Inorder Traversal:");
  inorderTraversal(root);
  
  console.log("Preorder Traversal:");
  preorderTraversal(root);
  
  console.log("Postorder Traversal:");
  postorderTraversal(root);
  