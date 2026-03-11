export const question9 = () => {

function randPrice(){
  const rupees = Math.floor(Math.random()*10)+5
  const paiseOptions = [0,25,50]
  const paise = paiseOptions[Math.floor(Math.random()*paiseOptions.length)]
  return parseFloat(`${rupees}.${paise}`)
}

function randQty(){
  return Math.floor(Math.random()*3)+2
}

function randFriends(){
  return Math.floor(Math.random()*3)+2
}

const pencilPrice = randPrice()
const notebookPrice = randPrice()

const pencilQty = randQty()
const notebookQty = randQty()

const pencilTotal = pencilPrice * pencilQty
const notebookTotal = notebookPrice * notebookQty

const bill = (pencilTotal + notebookTotal).toFixed(2)

const friends = randFriends()

const share = (parseFloat(bill) / friends).toFixed(2)

const advikPocket = 100

const remaining = (advikPocket - parseFloat(share)).toFixed(2)

return{

id:9,
type:"multi",

text:`Advik and his friends went to **Seenu Paper Mart** to buy school supplies.

They bought:

• ${pencilQty} pencils. Each pencil costs **₹${pencilPrice.toFixed(2)}**

• ${notebookQty} notebooks. Each notebook costs **₹${notebookPrice.toFixed(2)}**

Advik already had **₹100 in his pocket**.

The friends decided to **share the total bill equally among ${friends} friends**.

Help them calculate the bill and Advik's remaining money.`,

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
text:`D. How much money should each friend pay?`
},

{
key:"e",
text:`E. After paying his share, how much money will Advik have left from his pocket?`
}

],

correctAnswer:{

a:pencilTotal.toFixed(2),
b:notebookTotal.toFixed(2),
c:bill,
d:share,
e:remaining

},

hint:`Multiply the prices by quantities.

Add the totals to get the bill.

Divide the bill equally among the friends.

Subtract Advik's share from ₹100.`,

solution:`Cost of pencils

${pencilQty} × ₹${pencilPrice.toFixed(2)} = ₹${pencilTotal.toFixed(2)}

Cost of notebooks

${notebookQty} × ₹${notebookPrice.toFixed(2)} = ₹${notebookTotal.toFixed(2)}

Total bill

₹${pencilTotal.toFixed(2)} + ₹${notebookTotal.toFixed(2)} = ₹${bill}

Each friend pays

₹${bill} ÷ ${friends} = ₹${share}

Money left with Advik

₹100 - ₹${share} = ₹${remaining}`,

stepContent:[

{ key:"s1", text:`Multiply ₹${pencilPrice.toFixed(2)} × ${pencilQty}.` },

{ key:"s2", text:`Multiply ₹${notebookPrice.toFixed(2)} × ${notebookQty}.` },

{ key:"s3", text:`Add the two totals.` },

{ key:"s4", text:`Divide ₹${bill} by ${friends}.` },

{ key:"s5", text:`Subtract ₹${share} from ₹100.` }

],

steps:{

s1:pencilTotal.toFixed(2),
s2:notebookTotal.toFixed(2),
s3:bill,
s4:share,
s5:remaining

}

}

}