const unreadNotifs = document.getElementsByClassName("unread");
const notifsNumber = document.getElementById("notifs-number");
const markBtn = document.getElementById("mark-btn");
const iteration = unreadNotifs.length;

notifsNumber.textContent = unreadNotifs.length;

markBtn.onclick = () => {
  for (let i = 0; i < iteration; i++) {
    unreadNotifs[0].classList.remove("unread");
  }
  notifsNumber.textContent = unreadNotifs.length;
};
