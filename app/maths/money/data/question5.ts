export const question5 = () => {

function randPrice(){
  const rupees = Math.floor(Math.random()*10)+5
  const paiseOptions = [0,25,50,75]
  const paise = paiseOptions[Math.floor(Math.random()*paiseOptions.length)]
  return parseFloat(`${rupees}.${paise}`)
}

function randQty(){
  return Math.floor(Math.random()*3)+2
}

function randFriends(){
  return Math.floor(Math.random()*3)+2
}

const penPrice = randPrice()
const penQty = randQty()

const totalCost = penPrice * penQty

const friends = randFriends()

const share = (totalCost / friends).toFixed(2)

return{

id:5,
type:"multi",

text:`Advik visited **Seenu Paper Mart** with his friends to buy gel pens for their class project.

Each pen costs **₹${penPrice.toFixed(2)}**.

They bought **${penQty} pens** in total.

The friends decided to **share the cost equally** among **${friends} friends**.

Help them calculate the cost.`,

shopping:[

{
key:"a",
text:`A. What is the cost of ${penQty} pens?`
},

{
key:"b",
text:`B. How many friends are sharing the cost?`
},

{
key:"c",
text:`C. How much money should each friend pay?`
}

],

correctAnswer:{

a:totalCost.toFixed(2),
b:friends.toString(),
c:share

},

hint:`First multiply the price of one pen by the number of pens.

Then divide the total cost equally among the friends.`,

solution:`Cost of pens

${penQty} × ₹${penPrice.toFixed(2)} = ₹${totalCost.toFixed(2)}

Number of friends = ${friends}

Money each friend pays

₹${totalCost.toFixed(2)} ÷ ${friends} = ₹${share}`,

stepContent:[

{ key:"s1", text:`Multiply ₹${penPrice.toFixed(2)} × ${penQty}.` },

{ key:"s2", text:`Write the number of friends sharing the cost.` },

{ key:"s3", text:`Divide ₹${totalCost.toFixed(2)} by ${friends}.` }

],

steps:{

s1:totalCost.toFixed(2),

s2:friends.toString(),

s3:share

}

}

}