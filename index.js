function addElement(target, tag, content) {
    const root = document.querySelector(target);
    const element = document.createElement(tag);
    element.innerText = content;
    root.appendChild(element);
  }
  
  addElement("body", "h1", "Hello #insert");
  addElement("body", "p", "Hello #insert");
  addElement("body", "li", "Hello #insert");
  addElement("body", "button", "Happy learning");
