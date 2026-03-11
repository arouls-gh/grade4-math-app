export const question10 = () => {

const budget = 3000

const robloxPrice = 500
const gtaPrice = 1000
const gowPrice = 2000
const rdrPrice = 1500
const wwePrice = 750

const maxRoblox = budget / robloxPrice

const remainingAfterGTA = budget - gtaPrice
const remainingAfterRDR = budget - rdrPrice

// Combination chosen after GTA
const otherGamesCost = rdrPrice + robloxPrice
const totalSpent = gtaPrice + otherGamesCost
const balance = budget - totalSpent

return{

id:10,
type:"multi",

text:`Advik went to **Game Galaxy**, a video game shop, to buy new games for his PlayStation.

The shop sells the following games:

• Roblox – ₹${robloxPrice}  
• GTA – ₹${gtaPrice}  
• God of War – ₹${gowPrice}  
• RDR – ₹${rdrPrice}  
• WWE – ₹${wwePrice}

Advik's father gave him an important rule:

**Do not spend more than ₹${budget} on games.**

Advik really wants to buy **GTA**, so he will definitely buy **1 GTA CD first**.

After buying GTA, he wants to use the remaining money to buy **different games he likes**.

Help Advik decide what he can buy.`,

shopping:[

{
key:"a",
text:`A. What is the maximum number of Roblox CDs Advik can buy within ₹${budget}?`
},

{
key:"b",
text:`B. If Advik buys 1 GTA CD, how much money will remain from ₹${budget}?`
},

{
key:"c",
text:`C. If Advik buys 1 RDR CD, how much money will remain from ₹${budget}?`
},

{
key:"d",
text:`D. After buying GTA, which two games can Advik buy using the remaining ₹${remainingAfterGTA}?`
},

{
key:"e",
text:`E. If Advik buys GTA, RDR and Roblox, how much money will he take home from ₹${budget}?`
}

],

correctAnswer:{

a:maxRoblox.toString(),
b:remainingAfterGTA.toString(),
c:remainingAfterRDR.toString(),
d:"RDR and Roblox",
e:balance.toString()

},

hint:`Subtract the price of a game from the budget to find the remaining money.

Use the remaining money to buy other games without crossing ₹${budget}.`,

solution:`Maximum Roblox CDs

₹${budget} ÷ ₹${robloxPrice} = ${maxRoblox}

Money remaining after buying GTA

₹${budget} - ₹${gtaPrice} = ₹${remainingAfterGTA}

Money remaining after buying RDR

₹${budget} - ₹${rdrPrice} = ₹${remainingAfterRDR}

After buying GTA, Advik has ₹${remainingAfterGTA} left.

He can buy:

RDR = ₹${rdrPrice}  
Roblox = ₹${robloxPrice}

Total cost of these games

₹${rdrPrice} + ₹${robloxPrice} = ₹${otherGamesCost}

Total money spent

₹${gtaPrice} + ₹${otherGamesCost} = ₹${totalSpent}

Money Advik takes home

₹${budget} - ₹${totalSpent} = ₹${balance}`,

stepContent:[

{ key:"s1", text:`Divide ₹${budget} by ₹${robloxPrice}.` },

{ key:"s2", text:`Subtract ₹${gtaPrice} from ₹${budget}.` },

{ key:"s3", text:`Subtract ₹${rdrPrice} from ₹${budget}.` },

{ key:"s4", text:`After buying GTA, which games can be bought using ₹${remainingAfterGTA}?` },

{ key:"s5", text:`Add the cost of GTA, RDR and Roblox and subtract from ₹${budget}.` }

],

steps:{

s1:maxRoblox.toString(),
s2:remainingAfterGTA.toString(),
s3:remainingAfterRDR.toString(),
s4:"RDR and Roblox",
s5:balance.toString()

}

}

}