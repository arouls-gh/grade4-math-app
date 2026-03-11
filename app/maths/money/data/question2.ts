export const question2 = () => {

function randPrice(){
  const r = Math.floor(Math.random()*40)+10
  const p = Math.floor(Math.random()*90)+10
  return parseFloat(`${r}.${p}`)
}

const pencil = randPrice()
const eraser = randPrice()
const notebook = randPrice()

const total = pencil + eraser + notebook

const paid = Math.ceil(total/10)*10 + 10

const balance = (paid-total).toFixed(2)

return{

id:2,
type:"multi",

text:`Advik went to **Seenu Paper Mart** to buy some school supplies.

He bought the following items:

• Pencil : ₹${pencil.toFixed(2)}
• Eraser : ₹${eraser.toFixed(2)}
• Notebook : ₹${notebook.toFixed(2)}

Advik paid ₹${paid} at the counter.

Help the shopkeeper calculate the bill and the change to return to Advik.`,

shopping:[

{
key:"a",
text:`A. What is the total cost of the items Advik bought?`
},

{
key:"b",
text:`B. How much change should Advik get back?`
}

],

correctAnswer:{

a:total.toFixed(2),
b:balance

},

hint:`First add the prices of all items to find the total bill.

Then subtract the total from the money Advik paid.`,

solution:`Total cost = ${pencil.toFixed(2)} + ${eraser.toFixed(2)} + ${notebook.toFixed(2)}

Total = ₹${total.toFixed(2)}

Money given = ₹${paid}

Change = ${paid} - ${total.toFixed(2)}

Change = ₹${balance}`,

stepContent:[

{ key:"s1", text:"Add the price of Pencil and Eraser." },

{ key:"s2", text:"Add the Notebook price to get the total bill." },

{ key:"s3", text:`Subtract the total bill from ₹${paid}.` }

],

steps:{

s1:(pencil+eraser).toFixed(2),

s2:total.toFixed(2),

s3:balance

}

}

}