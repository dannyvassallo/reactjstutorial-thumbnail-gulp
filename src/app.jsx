var options = {
	thumbnailData: [{
		title: 'See Tutorials',
		number: 32,
		header: 'Learn React',
		description: 'React is a fantastic new library for making fast, dynamic pages. React is a fantastic new library for making fast, dynamic pages.',
		imageUrl: 'http://formatjs.io/img/react.svg'
	},{
		title: 'See Tutorials',
		number: 25,
		header: 'Learn Gulp',
		description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
		imageUrl: 'http://brunch.io/images/others/gulp.png'
	}]
};

// React, please render this class
var element = React.createElement(Thumbnaillist, options);

// React, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'));