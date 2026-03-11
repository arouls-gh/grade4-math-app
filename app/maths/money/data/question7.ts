export const question7 = () => {

function randPrice(){
  const rupees = Math.floor(Math.random()*8)+3
  const paiseOptions = [0,25,50]
  const paise = paiseOptions[Math.floor(Math.random()*paiseOptions.length)]
  return parseFloat(`${rupees}.${paise}`)
}

function randQty(){
  return Math.floor(Math.random()*4)+2
}

const pencilPrice = randPrice()
const eraserPrice = randPrice()
const rulerPrice = randPrice()

const pencilQty = randQty()
const eraserQty = randQty()
const rulerQty = randQty()

const pencilTotal = (pencilPrice * pencilQty).toFixed(2)
const eraserTotal = (eraserPrice * eraserQty).toFixed(2)
const rulerTotal = (rulerPrice * rulerQty).toFixed(2)

return{

id:7,
type:"multi",

text:`Advik visited **Seenu Paper Mart** to buy supplies for his school project.

He bought the following items:

• ${pencilQty} pencils. Each pencil costs **₹${pencilPrice.toFixed(2)}**

• ${eraserQty} erasers. Each eraser costs **₹${eraserPrice.toFixed(2)}**

• ${rulerQty} rulers. Each ruler costs **₹${rulerPrice.toFixed(2)}**

Help Advik calculate the cost of each type of item.`,

shopping:[

{
key:"a",
text:`A. What is the cost of ${pencilQty} pencils?`
},

{
key:"b",
text:`B. What is the cost of ${eraserQty} erasers?`
},

{
key:"c",
text:`C. What is the cost of ${rulerQty} rulers?`
}

],

correctAnswer:{

a:pencilTotal,
b:eraserTotal,
c:rulerTotal

},

hint:`Multiply the price of one item by the number of items bought.`,

solution:`Cost of pencils  
${pencilQty} × ₹${pencilPrice.toFixed(2)} = ₹${pencilTotal}

Cost of erasers  
${eraserQty} × ₹${eraserPrice.toFixed(2)} = ₹${eraserTotal}

Cost of rulers  
${rulerQty} × ₹${rulerPrice.toFixed(2)} = ₹${rulerTotal}`,

stepContent:[

{ key:"s1", text:`Multiply ₹${pencilPrice.toFixed(2)} × ${pencilQty}.` },

{ key:"s2", text:`Multiply ₹${eraserPrice.toFixed(2)} × ${eraserQty}.` },

{ key:"s3", text:`Multiply ₹${rulerPrice.toFixed(2)} × ${rulerQty}.` }

],

steps:{

s1:pencilTotal,
s2:eraserTotal,
s3:rulerTotal

}

}

}