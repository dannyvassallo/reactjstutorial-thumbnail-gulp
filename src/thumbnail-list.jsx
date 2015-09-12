var Thumbnaillist = React.createClass({
	render: function(){
		// Render multiple list objects
		var list = this.props.thumbnailData.map(function(thumbnailProps){
			return <Thumbnail {...thumbnailProps}/>
		});

		return <div>
			{list}
		</div>
		// End Render multiple list objects
	}
});