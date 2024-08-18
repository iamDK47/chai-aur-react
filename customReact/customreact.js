// function customRender(a,s){
function customRender(mainContainer){
   // const domElement = document.createElement(reactElement.tep)
   // domElement.innerHTML = reactElement.puttar
   // domElement.setAttribute('href' , reactElement.prap.href)
   // domElement.setAttribute('targ' , reactElement.prap.targ)

   // mainContainer.appendChild(domElement)

   const domElement = document.createElement(reactElement.tep)
   domElement.innerHTML = reactElement.puttar
   for (const prop in reactElement.prap) {
      domElement.setAttribute(prop , reactElement.prap[prop])
   }
   // s.appendChild(domElement)
   mainContainer.appendChild(domElement)
}

const reactElement = {
   tep: 'a',
   prap: {
      href: 'https://google.com/maps',
      targ: '_blank'
   },
   puttar: 'click to open google maps'
}

const mainContainer = document.getElementById('root')

customRender(reactElement,mainContainer)