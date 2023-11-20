function savetoLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const ph_no = event.target.no.value;
    //     // localStorage.setItem('name',name);
    // localStorage.setItem('email',email);
    const obj = {
      name,
      email,
      ph_no,
    };
    //localStorage.setItem(obj.name,JSON.stringify(obj))
    axios
      .post(
        "https://crudcrud.com/api/5411ef03fb7d47b78001b89d18fbb6c1/appointment",
        obj
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    showUSersonScreen(obj)
  }
  function showUSersonScreen(obj) {
    const parentElem = document.getElementById("listOfitems");
    const childElem = document.createElement("li");
  
    childElem.textContent = obj.name + "- " + obj.email + "- " + obj.ph_no;
  
    const deleteButt = document.createElement("input");
    deleteButt.type = "button";
    deleteButt.value = "Delete";
    deleteButt.onclick = () => {
      localStorage.removeItem(obj.name);
      parentElem.removeChild(childElem);
    };
  
    const editButt = document.createElement("input");
    editButt.type = "button";
    editButt.value = "Edit";
    editButt.onclick = () => {
      localStorage.removeItem(obj.email);
      parentElem.removeChild(childElem);
      document.getElementById("usernameInputTag").value = obj.name;
      document.getElementById("emailIdInputTag").value = obj.email;
    };
  
    childElem.appendChild(deleteButt);
    childElem.appendChild(editButt);
  
    parentElem.appendChild(childElem);
  }
  window.addEventListener("DOMContentLoaded",()=>{
     console.log("success");
     axios
      .get(
        "https://crudcrud.com/api/5411ef03fb7d47b78001b89d18fbb6c1/appointment"
      )
      .then((res) => res.data.forEach((key)=>{
  
        showUSersonScreen(key);
    })
  
      )
      .catch((err) => console.log(err));
  
  }
  
  
  )
  