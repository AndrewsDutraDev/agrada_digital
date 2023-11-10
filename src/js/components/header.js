const Header = {
	setMenuMobile: function(){
		let toggleMenu = document.getElementById('toggleMenu');
		let closeMenu = document.getElementById('closeMenu');
		let menu = document.querySelector('.actions');
		toggleMenu.addEventListener('click', function(){
			menu.classList.toggle('active');
		})
		closeMenu.addEventListener('click', function(){
			menu.classList.toggle('active');
		})
	},
	init: function(){
		console.log('header init')
		this.setMenuMobile();
	}
};

export default Header;