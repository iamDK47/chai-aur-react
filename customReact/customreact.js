function customRender(reactElement,container){
   const domElement = document.createElement(reactElement.tep)
   domElement.innerHTML = reactElement.puttar
   domElement.setAttribute('href' , reactElement.prap.href)
   domElement.setAttribute('targ' , reactElement.prap.targ)

   container.appendChild(domElement)

   // const domeElement = document.createElement(reactElement.tep)
   // domeElement.innerHTML = reactElement.puttar
   // for (const prap in reactElement) {
   //    if (prap === 'puttar') {
   //       const element = reactElement[prap];
         
   //    }
   // }
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