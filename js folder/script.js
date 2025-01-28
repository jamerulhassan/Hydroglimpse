
//handling the click event of the main navigation items
const ddOfAbout=document.querySelector('.ddOfAbout');
const ddOfwf=document.querySelector('.ddOfwf');
const handleClickAbout=()=>{
   ddOfAbout.classList.toggle('show');
   if(ddOfwf.classList.contains('show')){
      ddOfwf.classList.remove('show')
   }
}
const handleClickWf=(event)=>{
   ddOfwf.classList.toggle('show');
   if(ddOfAbout.classList.contains('show')){
      ddOfAbout.classList.remove('show')
   }
}
//handling the cick event of the menu and the side bar navigation
const sideBarContent=document.querySelector('.sideBarContent');
const firstLine=document.querySelector(".first");
const secondLine=document.querySelector(".second");
const thirdLine=document.querySelector(".third");

const handleClickMenu=()=>{
   sideBarContent.classList.toggle('show');
   firstLine.classList.toggle('firstLine');
   secondLine.classList.toggle('secondLine');
   thirdLine.classList.toggle('thirdLine');
}
const itemsInAboutSideBar=document.querySelector('.itemsInAboutSideBar');
const itemsInwFSideBar=document.querySelector('.itemsInwFSideBar');
const handleSideBarAbout=(e)=>{
   if(sideBarContent.classList.contains('show')){
      itemsInAboutSideBar.classList.toggle("show");
   }else{
      sideBarContent.classList.add('show')
      itemsInAboutSideBar.classList.toggle("show");
   }
  /* !sideBarContent.classList.remove('show')
   !firstLine.classList.toggle('firstLine');
   !secondLine.classList.toggle('secondLine');
   !thirdLine.classList.toggle('thirdLine');*/
}
const handleSideBarwf=()=>{
   if(sideBarContent.classList.contains('show')){
      itemsInwFSideBar.classList.toggle("show");
   }else{
      sideBarContent.classList.add('show')
      itemsInwFSideBar.classList.toggle("show");
   }
   /*itemsInwFSideBar.classList.toggle('show')
   !sideBarContent.classList.remove('show');
   !firstLine.classList.toggle('firstLine');
   !secondLine.classList.toggle('secondLine');
   !thirdLine.classList.toggle('thirdLine');*/
}
//handling the click event to remove the class "show" when the event occurs outside dropdowns,side bar navigations
onclick=(event)=>{
   if(!event.target.matches('.navElements') ){
      if(ddOfAbout.classList.contains('show') || ddOfwf.classList.contains('show')){
         ddOfAbout.classList.remove('show');
         ddOfwf.classList.remove('show')
      }
   }
}
const menu=document.querySelector(".menu-Line")
const m1=document.querySelector('.m1');
const m2=document.querySelector('.m2');
const m3=document.querySelector('.m3');
const m4=document.querySelector('.m4');
const leftTree=document.querySelector('.leftTree');
const rightTree=document.querySelector('.rightTree');
const topLeaf=document.querySelector('.topLeaf');
const grass=document.querySelector('.grass');
const text=document.querySelector('.text');
const moon=document.querySelector(".moon");
window.addEventListener("scroll",()=>{
   let value= window.scrollY;
   m1.style.top=value*1.4+"px";
   m2.style.top=value*1.3+"px";
   m3.style.top=value*0.9+"px";
   m4.style.top=value*0.9+"px";
   leftTree.style.left=value*-1.5+"px";
   rightTree.style.left=value*1.5+"px";
   topLeaf.style.top=value*-0.5+"px";
   topLeaf.style.left=value*0.5+"px";
   moon.style.top=value*1.5+"px";
   moon.style.left=value*1.1+"px";
   text.style.top=value*1.5+"px"
});
const m1One=document.querySelector(".m1-One");
const m2One=document.querySelector(".m2-One");
const m3One=document.querySelector(".m3-One");
const m4One=document.querySelector(".m4-One");
const m5One=document.querySelector(".m5-One");
const moonOne=document.querySelector(".moon-One");
const righttreeOne=document.querySelector(".righttree-One");
const leftreeOne=document.querySelector(".leftree-One");
const grassOne=document.querySelector(".grass-One");
window.addEventListener("scroll",()=>{
   let value= window.scrollY;
   m1One.style.top=value*0.5+"px";
   m2One.style.top=value*1.3+"px";
   m3One.style.top=value*1.5+"px";
   m4One.style.top=value*0.9+"px";
   m5One.style.top=value*0.3+"px";
   leftreeOne.style.left=value*-1.5+"px";
   righttreeOne.style.left=value*1.5+"px";
   moonOne.style.top=value*1.5+"px";
   moonOne.style.left=value*0.9+"px";
   text.style.top=value*-2.5+"px"
})


const icons = document.querySelectorAll('.navIcon');
const sections = document.querySelectorAll('.mainSection');

const handleScroll = () => {
    let scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        const sectionHeight = section.offsetHeight;
        
        const icon = document.querySelector(`.navIcon[data-target="#${section.id}"]`);
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
         
            icons.forEach(i => {
               
                i.classList.remove('active');
            });
            icon.classList.add('active');
        }
        
    });
};


window.addEventListener("scroll", handleScroll);
         // Function to handle the search and update the Tableau visualization
         const handleClickSearch = () => {
            console.log("hi");
            const filterValue = document.getElementById('productName').value;
            const url = "https://public.tableau.com/views/Book3_17296581951920/YourProduct?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";
        
            // Create the new URL with the filter value, adjusting the filter name as needed
            const newUrl = `${url}&Product=${encodeURIComponent(filterValue)}`; // Change 'Product' to your actual filter name
            
            // Update the iframe source
            document.getElementById('tabulaeFrame').src = newUrl;
        };

