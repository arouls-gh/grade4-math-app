export function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "{}");
}

export function saveUsers(users:any) {
  localStorage.setItem("users", JSON.stringify(users));
}

export function usernameExists(username:string) {
  const users = getUsers();
  return users[username] !== undefined;
}

export function mobileExists(mobile:string) {
  const users = getUsers();

  for (const u in users) {
    if (users[u].mobile === mobile) return true;
  }

  return false;
}

export function getUserByMobile(mobile:string) {
  const users = getUsers();

  for (const username in users) {
    if (users[username].mobile === mobile) {
      return { username, ...users[username] };
    }
  }

  return null;
}