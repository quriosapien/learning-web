function clearElement (element) {
  
  // TODO
}

function createElement (payload, success, fail) {
  let element;
  if (payload.type) {
    element = document.createElement(payload.type)
  } else {
    console.log(`Element type is not defined in ${payload}`)
    return undefined
  }
  if (Array.isArray(payload.attributes)) {
    payload.attributes.forEach(attribute => {
      element.setAttribute(attribute.key, attribute.value)
    })
  }
  if (payload.classList) {
    element.classList = payload.classList.join(' ');
  }
  element.innerText = payload.innerText ? payload.innerText : '';
  if (payload.parent) {
    payload.parent.appendChild(element)
  }
  return element
}

export default {
  clearElement,
  createElement
};