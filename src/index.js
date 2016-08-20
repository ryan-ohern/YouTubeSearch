import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCy5lHbkiIgxeQFNZFOOsc49Q16ckYtitU';

class App extends Component { 
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('react javascript');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
							// ES6 for when key and value are same
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			 });
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					// function that updates app state - updates selectedVideo
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}

// App is a class
// <App /> is an instance of our component class
ReactDOM.render(<App />, document.querySelector('.container'));