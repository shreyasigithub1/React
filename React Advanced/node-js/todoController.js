
const todos=[
    {
        "text":"Go to Gym at 9", "completed":false
    },
    {
        "text":"Go to Office at 10", "completed":false
    },
    {
        "text":"Meeting at 11", "completed":false
    }
]

module.exports.get=(req, res)=>{
    return res.end(JSON.stringify(todos));
}

// POST request to add a new todo
module.exports.post = (req, res) => {
    const { text, completed } = req.body;
  
    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }
  
    const newTodo = {
      id: Date.now(), // Generate a simple ID
      text,
      completed: completed || false,
    };
  
    todos.push(newTodo); // Add new todo to the list
  
    res.status(201).json(newTodo); // Respond with the created todo
  };