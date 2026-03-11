export const question8 = () => {

function randPrice(){
  const rupees = Math.floor(Math.random()*10)+5
  const paiseOptions = [0,25,50]
  const paise = paiseOptions[Math.floor(Math.random()*paiseOptions.length)]
  return parseFloat(`${rupees}.${paise}`)
}

function randQty(){
  return Math.floor(Math.random()*3)+2
}

const pencilPrice = randPrice()
const notebookPrice = randPrice()

const pencilQty = randQty()
const notebookQty = randQty()

const pencilTotal = pencilPrice * pencilQty
const notebookTotal = notebookPrice * notebookQty

const totalBill = (pencilTotal + notebookTotal).toFixed(2)

const paid = Math.ceil(parseFloat(totalBill)/10)*10 + 10

const change = (paid - parseFloat(totalBill)).toFixed(2)

return{

id:8,
type:"multi",

text:`Advik visited **Seenu Paper Mart** to buy supplies for his class project.

He bought:

• ${pencilQty} pencils. Each pencil costs **₹${pencilPrice.toFixed(2)}**

• ${notebookQty} notebooks. Each notebook costs **₹${notebookPrice.toFixed(2)}**

At the billing counter, Advik paid **₹${paid}**.

Help the shopkeeper calculate the bill.`,

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
text:`C. What is the total bill amount?`
},

{
key:"d",
text:`D. How much change should Advik get back?`
}

],

correctAnswer:{

a:pencilTotal.toFixed(2),
b:notebookTotal.toFixed(2),
c:totalBill,
d:change

},

hint:`Multiply the price by the quantity.

Then add the totals.

Finally subtract the bill from the money Advik paid.`,

solution:`Cost of pencils

${pencilQty} × ₹${pencilPrice.toFixed(2)} = ₹${pencilTotal.toFixed(2)}

Cost of notebooks

${notebookQty} × ₹${notebookPrice.toFixed(2)} = ₹${notebookTotal.toFixed(2)}

Total bill

₹${pencilTotal.toFixed(2)} + ₹${notebookTotal.toFixed(2)} = ₹${totalBill}

Money paid = ₹${paid}

Change

₹${paid} - ₹${totalBill} = ₹${change}`,

stepContent:[

{ key:"s1", text:`Multiply ₹${pencilPrice.toFixed(2)} × ${pencilQty}.` },

{ key:"s2", text:`Multiply ₹${notebookPrice.toFixed(2)} × ${notebookQty}.` },

{ key:"s3", text:`Add the two totals.` },

{ key:"s4", text:`Subtract ₹${totalBill} from ₹${paid}.` }

],

steps:{

s1:pencilTotal.toFixed(2),
s2:notebookTotal.toFixed(2),
s3:totalBill,
s4:change

}

}

}