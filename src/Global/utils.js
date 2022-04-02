export const decodeHTML = function (html) {
    const areaElement = document.createElement('textarea')
    areaElement.innerHTML = html
    return areaElement.value
  }
