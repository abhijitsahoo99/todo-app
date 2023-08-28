  const deleteDatacallback = (todoId) => {
    console.log("Delete done");
    //   Delete the right todo from the list
    // You will need to give each todo an id, and that should be enough to remove it
    // Find the parent element that contains the todo
    let parentElement = document.getElementById("main-area");
    // Find the todo element by its id
    let todoElement = document.getElementById(todoId);
    // Remove the todo element from the parent element
    parentElement.removeChild(todoElement);
  };

  const deleteTodo = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    }).then(() => deleteDatacallback(id.toString()));
  };

  const todosCallback = (data) => {
    console.log(data);
    let parentElement = document.getElementById("main-area");
    // parentElement.innerHTML = JSON.stringify(data);
    for (let i = 0; i < data.length; i++) {
      let childElement = document.createElement("div");
      childElement.setAttribute("id", data[i].id);
      // childElement.innerHTML = data[i].title + " " +  data[i].description;
      let grandChildElement1 = document.createElement("span");
      grandChildElement1.innerHTML = data[i].title;
      let grandChildElement2 = document.createElement("span");
      grandChildElement2.innerHTML = data[i].description;
      let grandChildElement3 = document.createElement("button");
      grandChildElement3.innerHTML = "Delete";
      grandChildElement3.setAttribute(
        "onClick",
        "deleteTodo(" + data[i].id + ")"
      );

      childElement.appendChild(grandChildElement1);
      childElement.appendChild(grandChildElement2);
      childElement.appendChild(grandChildElement3);

      parentElement.appendChild(childElement);
    }
  };

  const getDatacallback = (res) => {
    res.json().then(todosCallback);
  };
  const getData = () => {
    fetch("http://localhost:3000/todos", {
      method: "GET",
    }).then(getDatacallback);
  };
  getData();

  const parsedResponse = (data) => {
    console.log(data);
    let parentElement = document.getElementById("main-area");

    let childElement = document.createElement("div");
    childElement.setAttribute("id", data.id);

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    let grandChildElement1 = document.createElement("span");
    grandChildElement1.innerHTML = data.title;

    let grandChildElement2 = document.createElement("span");
    grandChildElement2.innerHTML = data.description;

    let grandChildElement3 = document.createElement("button");
    grandChildElement3.innerHTML = "Delete";
    // grandChildElement3.addEventListener("click", () => deleteTodo(data.id));
    grandChildElement3.setAttribute("onClick", "deleteTodo(" + data.id + ")");

    childElement.appendChild(checkbox);
    childElement.appendChild(grandChildElement1);
    childElement.appendChild(grandChildElement2);
    childElement.appendChild(grandChildElement3);

    parentElement.appendChild(childElement);
    title.value = "";
    description.value = "";
  };



  const callback = (res) => {
    res.json().then(parsedResponse);
  };


  const onPress = () => {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    if (title === "" || description === "") {
      alert("Please enter a title and description");
    } else {
      fetch("http://localhost:3000/todos", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(callback);
    }
  };

  
