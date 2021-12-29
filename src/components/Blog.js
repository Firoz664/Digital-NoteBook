/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
       
<div className="container">
	<div className="row">
		<div className="col col-xs-12">
                        <div className="blog-grids">
                            <div className="grid">
                                <div className="entry-media">
                                    <img src="http://csshint.com/wp-content/uploads/2018/04/button-effect-6-810x612.jpg" alt=""/>
                                </div>
                                <div className="entry-body">
                                    <span className="cat">inspiration</span>
                                    <h3><a to="http://csshint.com/beautiful-css3-buttons-with-hover-effects/" target="_blank">Beautiful css3 buttons with hover effects</a></h3>
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut..</p>
                                    <div className="read-more-date">
                                        <a to="http://csshint.com/beautiful-css3-buttons-with-hover-effects/" target="_blank">Read More..</a>
                                        <span className="date">3 Hours ago</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="entry-media">
                                    <img src="http://csshint.com/wp-content/uploads/2018/04/business-card-1.jpg" alt=""/>
                                </div>
                                <div className="entry-body">
                                    <span className="cat">photoshop</span>
                                    <h3><a to="http://csshint.com/free-modern-business-card-psd-templates/" target="_blank">40+ Best Free Modern Business Card PSD Templates</a></h3>
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut..</p>
                                    <div className="read-more-date">
                                        <a to="http://csshint.com/free-modern-business-card-psd-templates/" target="_blank">Read More..</a>
                                        <span className="date">3 Hours ago</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="entry-media">
                                    <img src="https://csshint.com/wp-content/uploads/2018/04/blog-theme.jpg" alt=""/>
                                </div>
                                <div className="entry-body">
                                    <span className="cat">Wordpress</span>
                                    <h3><a to="https://csshint.com/free-wordpress-blog-themes/" target="_blank">34+ Beautiful Free WordPress Blog Themes</a></h3>
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut..</p>
                                    <div className="read-more-date">
                                        <a to="https://csshint.com/free-wordpress-blog-themes/" target="_blank">Read More..</a>
                                        <span className="date">3 Hours ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
	</div>
</div>
    )
}

export default Blog
