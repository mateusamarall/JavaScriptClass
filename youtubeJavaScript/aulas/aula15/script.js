//getting the ids to create an event
const openSidebar = document.getElementById('openSlideMenu');
const closeSidebar = document.getElementById('closeSlideMenu');
//finished
//creating an event to open the sidebar
openSidebar.addEventListener('click',() =>{
  document.getElementById('menu').style.width='250px';
  document.getElementById('content').style.marginLeft='250px';
});
//finished the event to open the sidedbar

//creating an event to close the sidebar
closeSidebar.addEventListener('click',() =>{
  document.getElementById('menu').style.width='0';
  document.getElementById('content').style.marginLeft='0';
});
//finished the event to close the sidedbar