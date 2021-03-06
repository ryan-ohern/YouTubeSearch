import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				// video list takes prop from app and passes to video list item
				onVideoSelect={props.onVideoSelect}
				key={video.etag} 
				video={video} />
		);	
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;