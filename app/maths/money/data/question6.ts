export const question6 = () => {

function randTotal(){
  const rupees = Math.floor(Math.random()*60)+40
  const paiseOptions = [0,25,50,75]
  const paise = paiseOptions[Math.floor(Math.random()*paiseOptions.length)]
  return parseFloat(`${rupees}.${paise}`)
}

function randFriends(){
  return Math.floor(Math.random()*3)+2
}

function randSpend(){
  const rupees = Math.floor(Math.random()*5)+2
  const paiseOptions = [0,25,50]
  const paise = paiseOptions[Math.floor(Math.random()*paiseOptions.length)]
  return parseFloat(`${rupees}.${paise}`)
}

const totalMoney = randTotal()
const friends = randFriends()

const share = totalMoney / friends

const spend = randSpend()

const remaining = (share - spend).toFixed(2)

return{

id:6,
type:"multi",

text:`Advik and his friends visited **Seenu Paper Mart**.

Together they had **₹${totalMoney.toFixed(2)}**.

They decided to **share the money equally among ${friends} friends**.

After getting his share, Advik bought a pencil that cost **₹${spend.toFixed(2)}**.

Help Advik calculate the money.`,

shopping:[

{
key:"a",
text:`A. How much money does each friend get?`
},

{
key:"b",
text:`B. How much money did Advik spend on the pencil?`
},

{
key:"c",
text:`C. How much money does Advik have left after buying the pencil?`
}

],

correctAnswer:{

a:share.toFixed(2),
b:spend.toFixed(2),
c:remaining

},

hint:`First divide the total money among the friends.

Then subtract the cost of the pencil from Advik's share.`,

solution:`Total money = ₹${totalMoney.toFixed(2)}

Money each friend gets

₹${totalMoney.toFixed(2)} ÷ ${friends} = ₹${share.toFixed(2)}

Cost of pencil = ₹${spend.toFixed(2)}

Money left with Advik

₹${share.toFixed(2)} - ₹${spend.toFixed(2)} = ₹${remaining}`,

stepContent:[

{ key:"s1", text:`Divide ₹${totalMoney.toFixed(2)} by ${friends}.` },

{ key:"s2", text:`Write the cost of the pencil.` },

{ key:"s3", text:`Subtract ₹${spend.toFixed(2)} from Advik's share.` }

],

steps:{

s1:share.toFixed(2),

s2:spend.toFixed(2),

s3:remaining

}

}

}