import { questions as decimal } from "@/app/maths/decimal/data/questions"
import { questions as measurement } from "@/app/maths/measurement/data/questions"
import { questions as time } from "@/app/maths/time/data/questions"
import { questions as shapes } from "@/app/maths/shapes/data/questions"
import { questions as money } from "@/app/maths/money/data/questions"
import { questions as dataHandling } from "@/app/maths/datahandling/data/questions"
import { questions as symmetry } from "@/app/maths/symmetrypatterns/data/questions"
import { questions as perimeter } from "@/app/maths/perimeterarea/data/questions"

function tag(arr:any[], chapter:string){
return arr.map(q=>({...q, chapter}))
}

export const questionBank = [

...tag(decimal,"decimal"),
...tag(measurement,"measurement"),
...tag(time,"time"),
...tag(shapes,"shapes"),
...tag(money,"money"),
...tag(dataHandling,"datahandling"),
...tag(symmetry,"symmetry"),
...tag(perimeter,"perimeter")

]