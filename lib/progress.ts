export function getProgress() {
  return JSON.parse(localStorage.getItem("progress") || "{}");
}

export function saveProgress(progress:any) {
  localStorage.setItem("progress", JSON.stringify(progress));
}

export function markChapterComplete(username:string, chapter:string) {

  const progress = getProgress();

  if(!progress[username]){
    progress[username] = {};
  }

  progress[username][chapter] = true;

  saveProgress(progress);

}

export function isChapterComplete(username:string, chapter:string){

  const progress = getProgress();

  return progress?.[username]?.[chapter] || false;

}