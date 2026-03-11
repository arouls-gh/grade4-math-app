export const question4 = () => {

function randTotal(){
  const rupees = Math.floor(Math.random()*80)+40
  const paise = [0,25,50,75][Math.floor(Math.random()*4)]
  return parseFloat(`${rupees}.${paise}`)
}

function randFriends(){
  return Math.floor(Math.random()*3)+2
}

const totalCost = randTotal()
const friends = randFriends()

const share = (totalCost / friends).toFixed(2)

return{

id:4,
type:"multi",

text:`Advik and his friends visited **Seenu Paper Mart** to buy art supplies.

The total bill for the items was **₹${totalCost.toFixed(2)}**.

There were **${friends} friends**, and they decided to share the cost **equally**.

Help them calculate how much each person should pay.`,

shopping:[

{
key:"a",
text:`A. What is the total money spent at Seenu Paper Mart?`
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

hint:`Divide the total bill by the number of friends.`,

solution:`Total bill = ₹${totalCost.toFixed(2)}

Number of friends = ${friends}

Each friend pays:

${totalCost.toFixed(2)} ÷ ${friends} = ₹${share}`,

stepContent:[

{ key:"s1", text:`Write the total bill amount.` },

{ key:"s2", text:`Write the number of friends sharing the bill.` },

{ key:"s3", text:`Divide ₹${totalCost.toFixed(2)} by ${friends}.` }

],

steps:{

s1:totalCost.toFixed(2),

s2:friends.toString(),

s3:share

}

}

}