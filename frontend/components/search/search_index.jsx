import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            result: this.props.location.search.slice(14).split("+").join(" ")
        }
    };

    componentDidMount() {
        this.props.fetchSearchVideos(this.state.result);
    }

    render() {
        return (
            <div className="search-index">
                <section className="nav-bar">
                    <div className="icon-container" >
                        <img className="icon-pic" src={window.homePic} />
                        <span className="icon-text home-icon">Home</span>
                    </div>
                    <div
                        className="icon-container"
                        onClick={() =>
                            (window.location =
                                "https://github.com/guw005/Full-Stack-Project")
                        }
                    >
                        <img className="icon-pic" src={window.githubPic} />
                        <span className="icon-text">github</span>
                    </div>
                </section>

                <div className="search-index-videos-container">
                    <div className="search-index-filter">
                        {/* <p>FILTER</p> */}
                    </div>

                    <div className="search-index-videos">
                        {this.props.videos.length > 0 ? (
                            this.props.videos.map( video => {
                                return (
                                    <SearchIndexItem
                                        video={video}
                                        user={this.props.users[video.author_id]}
                                        history={this.props.history}
                                        key={video.id}
                                    />
                                    // <span>{video.id}</span>
                                )
                            })
                        ) : (
                            <div className="no-result-container">
                                <div className="no-result-pic-container">
                                    <img 
                                    className="no-result-pic"
                                    src={window.noResult}/>
                                </div>

                                <div className="no-result-info-1">
                                    <span>No results found</span>
                                </div>

                                <div className="no-result-info-2">
                                    <span>Try different keywords</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default withRouter(SearchIndex);