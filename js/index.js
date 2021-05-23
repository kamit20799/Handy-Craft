// $('.sd').click(function(){
// 	$('.hero, .content').addClass('scrolled');
// });

// $('.hero').mousewheel(function(e){
// 	if( e.deltaY < 0 ){
// 		$('.hero, .content').addClass('scrolled');
// 		return false;
// 	}
// });
// $(window).mousewheel(function(e){
// 	if( $('.hero.scrolled').length ){
// 		if( $(window).scrollTop() == 0 && e.deltaY > 0 ){
// 			$('.hero, .content').removeClass('scrolled');
// 		}
// 	}
// });

// FAQ Section

// const acc_btns = document.querySelectorAll(".accordion-header");
// const acc_contents = document.querySelectorAll(".accordion-body");

// acc_btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     acc_contents.forEach((acc) => {
//       if (
//         e.target.nextElementSibling !== acc &&
//         acc.classList.contains("active")
//       ) {
//         acc.classList.remove("active");
//         acc_btns.forEach((btn) => btn.classList.remove("active"));
//       }
//     });

//     const panel = btn.nextElementSibling;
//     panel.classList.toggle("active");
//     btn.classList.toggle("active");
//   });
// });

// window.onclick = (e) => {
//   if (!e.target.matches(".accordion-header")) {
//     acc_btns.forEach((btn) => btn.classList.remove("active"));
//     acc_contents.forEach((acc) => acc.classList.remove("active"));
//   }
// };