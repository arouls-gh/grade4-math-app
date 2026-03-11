export async function saveFeedback(username:string,chapter:string,feedback:string){

  await fetch("/api/student-feedback",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      username,
      chapter,
      feedback
    })
  })

}