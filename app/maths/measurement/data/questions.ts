export const questions = [
  {
    id: 1,
    text:
      "An ant is 1 mm long. One pencil is 5 cm long. How many ants cover the length of one pencil?",
    type: "single",
    correctAnswer: "50",

    hint:
      "10 mm = 1 cm\nMultiply when converting bigger to smaller.",

    solution:
      "1 cm = 10 mm\n5 cm = 50 mm\n1 ant = 1 mm\nTherefore 50 ants.",

    lesson:
      "Now you have learned to convert mm to cm and compare measuring small objects lengths.",

    stepContent: [
      { text: "1 ant = 1 mm (given)", key: "info" },
      { text: "10 mm = ____ cm", key: "s2" },
      { text: "5 cm = ____ mm", key: "s3" },
      { text: "Therefore 1 pencil length = ____ ants", key: "s4" }
    ],

    steps: {
      s2: "1",
      s3: "50",
      s4: "50"
    }
  },

  {
    id: 2,
    text:
      "Jasritha buys a ribbon roll that is 6 metres long.\n" +
      "She uses:\n" +
      "• 250 cm for the gate\n" +
      "• 1 m 75 cm for the stage\n" +
      "• 80 cm for flower pots\n\n" +
      "Answer (write units properly):\n" +
      "A) Convert 6 m to cm\n" +
      "B) Convert 1 m 75 cm to cm\n" +
      "C) Convert 250 cm to m (mixed unit)\n" +
      "D) Total ribbon used (cm)\n" +
      "E) Remaining ribbon (cm)",

    type: "multi",

    correctAnswer: {
      a: "600 cm",
      b: "175 cm",
      c: "2 m 50 cm",
      d: "505 cm",
      e: "95 cm"
    },

    hint:
      "m → cm multiply by 100\ncm → m divide by 100\nAlways write units.\nAdd to get total used.\nSubtract to get remaining.",

    solution:
      "6 m = 600 cm\n" +
      "1 m 75 cm = 175 cm\n" +
      "250 cm = 2 m 50 cm\n" +
      "Total used = 505 cm\n" +
      "Remaining = 95 cm",

    lesson:
      "Now you have learned to convert meter to centimeter and cm to m and to Add and subtract between cm and m.",

    stepContent: [
      { text: "A) 6 × 100 = ____", key: "a1" },
      { text: "Write with unit: ____", key: "a2" },

      { text: "B) 100 + 75 = ____", key: "b1" },
      { text: "Write with unit: ____", key: "b2" },

      { text: "C) 250 ÷ 100 = ____", key: "c1" },
      { text: "Remainder = ____", key: "c2" },
      { text: "Write mixed unit: ____", key: "c3" },

      { text: "D) 250 + 175 + 80 = ____", key: "d1" },
      { text: "Write with unit: ____", key: "d2" },

      { text: "E) 600 − 505 = ____", key: "e1" },
      { text: "Write with unit: ____", key: "e2" }
    ],

    steps: {
      a1: "600",
      a2: "600 cm",
      b1: "175",
      b2: "175 cm",
      c1: "2",
      c2: "50",
      c3: "2 m 50 cm",
      d1: "505",
      d2: "505 cm",
      e1: "95",
      e2: "95 cm"
    }
  },

     {
    id: 3,

    text:
      "Advik is practicing for a marathon.\n\n" +
      "In the morning, he runs 2 km 300 m.\n" +
      "In the evening, he runs 1 km 450 m.\n\n" +
      "The total marathon track is 5 km.\n\n" +
      "Answer (write answers in metres only):\n" +
      "A) Morning run in metres\n" +
      "B) Evening run in metres\n" +
      "C) Total distance run in one day\n" +
      "D) Distance left to complete 5 km",

    type: "multi",

    correctAnswer: {
      a: "2300 m",
      b: "1450 m",
      c: "3750 m",
      d: "1250 m"
    },

    hint:
      "km → m multiply by 1000\n" +
      "Convert everything into metres before adding or subtracting.\n" +
      "Add distances when combining runs.\n" +
      "Subtract to find remaining distance.\n" +
      "Always write units properly.",

    solution:
      "Morning run:\n" +
      "1 km = 1000 m\n" +
      "2 km = 2000 m\n" +
      "2000 + 300 = 2300 m\n\n" +
      "Evening run:\n" +
      "1 km = 1000 m\n" +
      "1000 + 450 = 1450 m\n\n" +
      "Total run:\n" +
      "2300 + 1450 = 3750 m\n\n" +
      "Total track:\n" +
      "5 km = 5000 m\n\n" +
      "Remaining distance:\n" +
      "5000 − 3750 = 1250 m",

    lesson:
      "You have now learnt km to m and m to km conversion, and add / subtract and work on mixed and single units for km and m.",

    stepContent: [
      {
        text: "Step 1: We cannot add kilometres and metres directly. Units must be the same before performing operations.",
        key: "info1"
      },
      {
        text: "How many metres are there in 1 kilometre?",
        key: "a0"
      },
      {
        text: "Convert 2 km into metres: 2 × 1000 = ____",
        key: "a1"
      },
      {
        text: "Now add the extra 300 m to get total morning distance: 2000 + 300 = ____",
        key: "a2"
      },
      {
        text: "Step 2: Convert the evening run into metres.",
        key: "info2"
      },
      {
        text: "1 km = ____ m",
        key: "b0"
      },
      {
        text: "Add the extra 450 m: 1000 + 450 = ____",
        key: "b2"
      },
      {
        text: "Step 3: Now both distances are in metres. Add them: 2300 + 1450 = ____",
        key: "c1"
      },
      {
        text: "Step 4: Convert total marathon track into metres: 5 × 1000 = ____",
        key: "d1"
      },
      {
        text: "Step 5: Subtract total distance run from total track: 5000 − 3750 = ____",
        key: "d2"
      }
    ],

    steps: {
      a0: "1000",
      a1: "2000",
      a2: "2300",
      b0: "1000",
      b2: "1450",
      c1: "3750",
      d1: "5000",
      d2: "1250"
    }
  },

  {
    id: 4,

    text:
      "Convert the following measurements.\n\n" +
      "A) Convert 8 cm 7 mm into mm\n" +
      "B) Convert 96 mm into cm and mm\n" +
      "C) Convert 5 m 35 cm into cm\n" +
      "D) Convert 480 cm into m and cm\n" +
      "E) Convert 4 km 600 m into metres\n" +
      "F) Convert 8650 m into km and m",

    type: "multi",

    correctAnswer: {
      a: "87 mm",
      b: "9 cm 6 mm",
      c: "535 cm",
      d: "4 m 80 cm",
      e: "4600 m",
      f: "8 km 650 m"
    },

    hint:
      "Mixed → Single: Multiply the bigger unit, then add the smaller part.\n" +
      "Single → Mixed: Divide and use quotient and remainder.\n" +
      "10 mm = 1 cm\n" +
      "100 cm = 1 m\n" +
      "1000 m = 1 km",

    solution:
      "8 cm = 80 mm → 80 + 7 = 87 mm\n\n" +
      "96 ÷ 10 = 9 remainder 6 → 9 cm 6 mm\n\n" +
      "5 m = 500 cm → 500 + 35 = 535 cm\n\n" +
      "480 ÷ 100 = 4 remainder 80 → 4 m 80 cm\n\n" +
      "4 km = 4000 m → 4000 + 600 = 4600 m\n\n" +
      "8650 ÷ 1000 = 8 remainder 650 → 8 km 650 m",

    lesson:
      "You have now learnt how to convert mixed units to single units and split a single unit into mixed units using division and remainder across mm–cm, cm–m and m–km.",

    stepContent: [

      { text: "Mixed to single unit: Convert the bigger unit first, then add the smaller part.", key: "info1" },

      { text: "8 cm = 8 × 10 = ____ mm", key: "a1" },
      { text: "Now add 7 mm: 80 + 7 = ____ mm", key: "a2" },

      { text: "Single to mixed unit: Divide and split into two numbers (quotient and remainder).", key: "info2" },

      { text: "96 ÷ 10 = ____ cm (whole number part)", key: "b1" },
      { text: "Remainder = ____ mm", key: "b2" },

      { text: "5 m = 5 × 100 = ____ cm", key: "c1" },
      { text: "Add 35 cm: 500 + 35 = ____ cm", key: "c2" },

      { text: "480 ÷ 100 = ____ m (whole number part)", key: "d1" },
      { text: "Remainder = ____ cm", key: "d2" },

      { text: "4 km = 4 × 1000 = ____ m", key: "e1" },
      { text: "Add 600 m: 4000 + 600 = ____ m", key: "e2" },

      { text: "8650 ÷ 1000 = ____ km (whole number part)", key: "f1" },
      { text: "Remainder = ____ m", key: "f2" }

    ],

    steps: {
      a1: "80",
      a2: "87",

      b1: "9",
      b2: "6",

      c1: "500",
      c2: "535",

      d1: "4",
      d2: "80",

      e1: "4000",
      e2: "4600",

      f1: "8",
      f2: "650"
    }
  },

  {
  id: 5,

  text:
    "Convert the following into the smallest unit mentioned.\n\n" +
    "A) Convert 7 g into mg\n" +
    "B) Convert 4 kg into g\n" +
    "C) Convert 3 tonne into kg\n" +
    "D) Convert 2 kg into mg",

  type: "multi",

  correctAnswer: {
    a: "7000 mg",
    b: "4000 g",
    c: "3000 kg",
    d: "2000000 mg"
  },

  hint:
    "1 g = 1000 mg\n" +
    "1 kg = 1000 g\n" +
    "1 tonne = 1000 kg\n" +
    "Multiply when converting bigger unit to smaller unit.",

  solution:
    "7 g = 7 × 1000 = 7000 mg\n\n" +
    "4 kg = 4 × 1000 = 4000 g\n\n" +
    "3 tonne = 3 × 1000 = 3000 kg\n\n" +
    "2 kg = 2 × 1000 × 1000 = 2000000 mg",

  lesson:
    "You have now learnt to convert weight units from bigger to smaller units using multiplication (mg, g, kg, tonne).",

  stepContent: [
    { text: "1 g = ____ mg", key: "a1" },
    { text: "7 × 1000 = ____", key: "a2" },

    { text: "1 kg = ____ g", key: "b1" },
    { text: "4 × 1000 = ____", key: "b2" },

    { text: "1 tonne = ____ kg", key: "c1" },
    { text: "3 × 1000 = ____", key: "c2" },

    { text: "Convert kg to g first: 2 × 1000 = ____ g", key: "d1" },
    { text: "Now convert g to mg: 2000 × 1000 = ____ mg", key: "d2" }
  ],

  steps: {
    a1: "1000",
    a2: "7000",
    b1: "1000",
    b2: "4000",
    c1: "1000",
    c2: "3000",
    d1: "2000",
    d2: "2000000"
  }
},

{
  id: 6,

  text:
    "Convert the following.\n\n" +
    "A) Convert 5 kg 300 g into g\n" +
    "B) Convert 4500 g into kg and g\n" +
    "C) Convert 2 tonne 250 kg into kg\n" +
    "D) Convert 3750 kg into tonne and kg",

  type: "multi",

  correctAnswer: {
    a: "5300 g",
    b: "4 kg 500 g",
    c: "2250 kg",
    d: "3 tonne 750 kg"
  },

  hint:
    "Mixed → Single: Multiply bigger unit then add smaller part.\n" +
    "Single → Mixed: Divide and write quotient and remainder.\n" +
    "1 kg = 1000 g\n" +
    "1 tonne = 1000 kg",

  solution:
    "5 kg = 5000 g → 5000 + 300 = 5300 g\n\n" +
    "4500 ÷ 1000 = 4 remainder 500 → 4 kg 500 g\n\n" +
    "2 tonne = 2000 kg → 2000 + 250 = 2250 kg\n\n" +
    "3750 ÷ 1000 = 3 remainder 750 → 3 tonne 750 kg",

  lesson:
    "You have now learnt to convert mixed weight units into single units and split single units into mixed units using division and remainder.",

  stepContent: [

    { text: "5 kg = 5 × 1000 = ____ g", key: "a1" },
    { text: "Add 300 g: 5000 + 300 = ____ g", key: "a2" },

    { text: "4500 ÷ 1000 = ____ kg (whole part)", key: "b1" },
    { text: "Remainder = ____ g", key: "b2" },

    { text: "2 tonne = 2 × 1000 = ____ kg", key: "c1" },
    { text: "Add 250 kg: 2000 + 250 = ____ kg", key: "c2" },

    { text: "3750 ÷ 1000 = ____ tonne (whole part)", key: "d1" },
    { text: "Remainder = ____ kg", key: "d2" }

  ],

  steps: {
    a1: "5000",
    a2: "5300",
    b1: "4",
    b2: "500",
    c1: "2000",
    c2: "2250",
    d1: "3",
    d2: "750"
  }
},

{
  id: 7,

  text:
    "A grocery store received 2 kg 450 g of rice in the morning.\n" +
    "In the afternoon, it received 3 kg 750 g more.\n\n" +
    "During the day, the store sold 4 kg 200 g.\n\n" +
    "Answer:\n" +
    "A) Total rice received (in g)\n" +
    "B) Total rice remaining after selling (in g)",

  type: "multi",

  correctAnswer: {
    a: "6200 g",
    b: "2000 g"
  },

  hint:
    "Convert everything into grams before adding or subtracting.\n" +
    "Add to find total received.\n" +
    "Subtract to find remaining.",

  solution:
    "Morning: 2 kg = 2000 g → 2000 + 450 = 2450 g\n\n" +
    "Afternoon: 3 kg = 3000 g → 3000 + 750 = 3750 g\n\n" +
    "Total received: 2450 + 3750 = 6200 g\n\n" +
    "Sold: 4 kg 200 g = 4200 g\n\n" +
    "Remaining: 6200 − 4200 = 2000 g",

  lesson:
    "You have now learnt to convert mixed weight units into single units before performing addition and subtraction operations.",

  stepContent: [

    { text: "Convert 2 kg to grams: 2 × 1000 = ____ g", key: "a1" },
    { text: "Add 450 g: 2000 + 450 = ____ g", key: "a2" },

    { text: "Convert 3 kg to grams: 3 × 1000 = ____ g", key: "a3" },
    { text: "Add 750 g: 3000 + 750 = ____ g", key: "a4" },

    { text: "Add total received: 2450 + 3750 = ____ g", key: "a5" },

    { text: "Convert sold quantity: 4 × 1000 = ____ g", key: "b1" },
    { text: "Add 200 g: 4000 + 200 = ____ g", key: "b2" },

    { text: "Remaining rice: 6200 − 4200 = ____ g", key: "b3" }

  ],

  steps: {
    a1: "2000",
    a2: "2450",
    a3: "3000",
    a4: "3750",
    a5: "6200",
    b1: "4000",
    b2: "4200",
    b3: "2000"
  }
},

{
  id: 8,

  text:
    "Convert the following measurements of capacity.\n\n" +
    "A) Convert 3 L into ml\n" +
    "B) Convert 4500 ml into L and ml\n" +
    "C) Convert 2 L 350 ml into ml\n" +
    "D) Convert 7200 ml into L and ml",

  type: "multi",

  correctAnswer: {
    a: "3000 ml",
    b: "4 L 500 ml",
    c: "2350 ml",
    d: "7 L 200 ml"
  },

  hint:
    "1 L = 1000 ml\n" +
    "Bigger → Smaller: Multiply\n" +
    "Single → Mixed: Divide and write remainder\n" +
    "Mixed → Single: Multiply bigger part and add smaller part",

  solution:
    "3 L = 3 × 1000 = 3000 ml\n\n" +
    "4500 ÷ 1000 = 4 remainder 500 → 4 L 500 ml\n\n" +
    "2 L = 2000 ml → 2000 + 350 = 2350 ml\n\n" +
    "7200 ÷ 1000 = 7 remainder 200 → 7 L 200 ml",

  lesson:
    "You have now learnt to convert capacity between litres and millilitres using multiplication, division and remainder.",

  stepContent: [

    { text: "1 L = ____ ml", key: "a1" },
    { text: "3 × 1000 = ____", key: "a2" },

    { text: "4500 ÷ 1000 = ____ L (whole part)", key: "b1" },
    { text: "Remainder = ____ ml", key: "b2" },

    { text: "2 L = 2 × 1000 = ____ ml", key: "c1" },
    { text: "Add 350 ml: 2000 + 350 = ____ ml", key: "c2" },

    { text: "7200 ÷ 1000 = ____ L", key: "d1" },
    { text: "Remainder = ____ ml", key: "d2" }

  ],

  steps: {
    a1: "1000",
    a2: "3000",
    b1: "4",
    b2: "500",
    c1: "2000",
    c2: "2350",
    d1: "7",
    d2: "200"
  }
},

{
  id: 9,

  text:
    "A juice shop had 5 L 200 ml of orange juice in the morning.\n" +
    "It prepared 2 L 350 ml more in the afternoon.\n\n" +
    "During the day, it sold 3 L 150 ml in the morning shift\n" +
    "and 1 L 500 ml in the evening shift.\n\n" +
    "Answer:\n" +
    "A) Total juice prepared (in ml)\n" +
    "B) Total juice sold (in ml)\n" +
    "C) Remaining juice (in ml)",

  type: "multi",

  correctAnswer: {
    a: "7550 ml",
    b: "4650 ml",
    c: "2900 ml"
  },

  hint:
    "Convert everything into millilitres before adding or subtracting.\n" +
    "Add for total prepared.\n" +
    "Add sales.\n" +
    "Subtract total sold from total prepared.",

  solution:
    "5 L = 5000 ml → 5000 + 200 = 5200 ml\n\n" +
    "2 L = 2000 ml → 2000 + 350 = 2350 ml\n\n" +
    "Total prepared = 5200 + 2350 = 7550 ml\n\n" +
    "3 L 150 ml = 3150 ml\n" +
    "1 L 500 ml = 1500 ml\n\n" +
    "Total sold = 3150 + 1500 = 4650 ml\n\n" +
    "Remaining = 7550 − 4650 = 2900 ml",

  lesson:
    "You have now learnt to convert mixed capacity units into single units before performing multiple addition and subtraction operations.",

  stepContent: [

    { text: "Convert 5 L to ml: 5 × 1000 = ____", key: "a1" },
    { text: "Add 200 ml: 5000 + 200 = ____", key: "a2" },

    { text: "Convert 2 L to ml: 2 × 1000 = ____", key: "a3" },
    { text: "Add 350 ml: 2000 + 350 = ____", key: "a4" },

    { text: "Total prepared: 5200 + 2350 = ____", key: "a5" },

    { text: "3 L = 3 × 1000 = ____", key: "b1" },
    { text: "Add 150 ml: 3000 + 150 = ____", key: "b2" },

    { text: "1 L = 1 × 1000 = ____", key: "b3" },
    { text: "Add 500 ml: 1000 + 500 = ____", key: "b4" },

    { text: "Total sold: 3150 + 1500 = ____", key: "b5" },

    { text: "Remaining: 7550 − 4650 = ____", key: "c1" }

  ],

  steps: {
    a1: "5000",
    a2: "5200",
    a3: "2000",
    a4: "2350",
    a5: "7550",
    b1: "3000",
    b2: "3150",
    b3: "1000",
    b4: "1500",
    b5: "4650",
    c1: "2900"
  }
},

{
  id: 10,

  text:
    "Find the difference between the following measurements.\n\n" +
    "A) 6 m 45 cm − 3 m 80 cm\n" +
    "B) 5 kg 250 g − 2 kg 900 g\n" +
    "C) 4 L 300 ml − 1 L 750 ml\n\n" +
    "Write answers in mixed units.",

  type: "multi",

  correctAnswer: {
    a: "2 m 65 cm",
    b: "2 kg 350 g",
    c: "2 L 550 ml"
  },

  hint:
    "Unlike normal subtraction, we do not borrow here, we just find the difference digit by digit directly.\n" +
    "First compare smaller units.\n" +
    "If needed, convert 1 bigger unit into smaller unit.\n" +
    "Example: 1 m = 100 cm\n" +
    "1 kg = 1000 g\n" +
    "1 L = 1000 ml",

  solution:
    "A) 6 m 45 cm − 3 m 80 cm\n" +
    "Convert 6 m into 5 m 145 cm\n" +
    "Now subtract → 5 m 145 cm − 3 m 80 cm = 2 m 65 cm\n\n" +

    "B) Convert 5 kg into 4 kg 1250 g\n" +
    "Now subtract → 4 kg 1250 g − 2 kg 900 g = 2 kg 350 g\n\n" +

    "C) Convert 4 L into 3 L 1300 ml\n" +
    "Subtract → 3 L 1300 ml − 1 L 750 ml = 2 L 550 ml",

  lesson:
    "You have now learnt that subtraction in mixed units requires regrouping one bigger unit into smaller units instead of normal digit borrowing.",

  stepContent: [

    { text: "1 m = ____ cm", key: "a1" },
    { text: "Convert 6 m 45 cm into 5 m ____ cm", key: "a2" },
    { text: "145 − 80 = ____ cm", key: "a3" },
    { text: "5 − 3 = ____ m", key: "a4" },

    { text: "1 kg = ____ g", key: "b1" },
    { text: "Convert 5 kg 250 g into 4 kg ____ g", key: "b2" },
    { text: "1250 − 900 = ____ g", key: "b3" },
    { text: "4 − 2 = ____ kg", key: "b4" },

    { text: "1 L = ____ ml", key: "c1" },
    { text: "Convert 4 L 300 ml into 3 L ____ ml", key: "c2" },
    { text: "1300 − 750 = ____ ml", key: "c3" },
    { text: "3 − 1 = ____ L", key: "c4" }

  ],

  steps: {
    a1: "100",
    a2: "145",
    a3: "65",
    a4: "2",

    b1: "1000",
    b2: "1250",
    b3: "350",
    b4: "2",

    c1: "1000",
    c2: "1300",
    c3: "550",
    c4: "2"
  }
}

];
