export const question3 = () => {

function randPrice(){
  const r = Math.floor(Math.random()*20)+5
  const p = Math.floor(Math.random()*90)+10
  return parseFloat(`${r}.${p}`)
}

function randQty(){
  return Math.floor(Math.random()*4)+2
}

const pencilPrice = randPrice()
const notebookPrice = randPrice()

const pencilQty = randQty()
const notebookQty = randQty()

const pencilTotal = pencilPrice * pencilQty
const notebookTotal = notebookPrice * notebookQty

const grandTotal = pencilTotal + notebookTotal

return{

id:3,
type:"multi",

text:`Advik went to **Seenu Paper Mart** to buy some school items.

He bought:

• ${pencilQty} pencils.  
Each pencil costs ₹${pencilPrice.toFixed(2)}

• ${notebookQty} notebooks.  
Each notebook costs ₹${notebookPrice.toFixed(2)}

Help the shopkeeper calculate the total bill.`,

shopping:[

{
key:"a",
text:`A. What is the cost of ${pencilQty} pencils?`
},

{
key:"b",
text:`B. What is the cost of ${notebookQty} notebooks?`
},

{
key:"c",
text:`C. What is the total money Advik has to pay?`
}

],

correctAnswer:{

a:pencilTotal.toFixed(2),
b:notebookTotal.toFixed(2),
c:grandTotal.toFixed(2)

},

hint:`Multiply the price of each item by the number of items.

Then add the totals.`,

solution:`Cost of pencils  
${pencilQty} × ${pencilPrice.toFixed(2)} = ₹${pencilTotal.toFixed(2)}

Cost of notebooks  
${notebookQty} × ${notebookPrice.toFixed(2)} = ₹${notebookTotal.toFixed(2)}

Total bill  
${pencilTotal.toFixed(2)} + ${notebookTotal.toFixed(2)} = ₹${grandTotal.toFixed(2)}`,

stepContent:[

{ key:"s1", text:`Multiply ₹${pencilPrice.toFixed(2)} × ${pencilQty}.` },

{ key:"s2", text:`Multiply ₹${notebookPrice.toFixed(2)} × ${notebookQty}.` },

{ key:"s3", text:`Add the two totals.` }

],

steps:{

s1:pencilTotal.toFixed(2),

s2:notebookTotal.toFixed(2),

s3:grandTotal.toFixed(2)

}

}

}