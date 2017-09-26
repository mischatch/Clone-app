import React from 'react';
import Modal from 'react-modal';
import ProjectDetailContainer from './project_detail_container';
import style from './modal-style';
import CommentsContainer from '../comment/comment_container';
import ProjectImage from './project_image';
import { Link } from 'react-router-dom';

class ProjectDetail extends React.Component {

  constructor(props){
    super(props);
    this.buttonName = this.buttonName.bind(this);
    this.likeSwitcher = this.likeSwitcher.bind(this);
    this.renderOrNot = this.renderOrNot.bind(this);
  }

  buttonName(){
    if(this.props.project.liker_ids === null || !this.props.project.liker_ids.includes(this.props.currentUser.id)){
      return 'Appreciate Project';
    } else {
      return 'Thank You';
    }
  }

  likeSwitcher(e){
    e.preventDefault();

    const like = {user_id: this.props.currentUser.id,
                project_id: this.props.projectId };
    if(this.props.project.liker_ids === null || !this.props.project.liker_ids.includes(this.props.currentUser.id)){
      this.props.createLike(like);
    } else {

      this.props.unlikeProject(this.props.projectId);
      // this.props.unlikeProject(likes[this.props.currentUser.id].id);
    }
  }

  renderOrNot(){
    if(this.props.currentUser){
      return (
        <div className="sb-apr-btn-cont">
          <button id="appr-bttn" className={this.buttonName().replace(/ /g,"_")} onClick={this.likeSwitcher} >{this.buttonName()}</button>
        </div> );
    }
  }

  render(){
    const { project, user, projectId, currentUser } = this.props;
    
    return (
      <div>
        <div className="ProjectModal?">
          <div className="projFrame">
            <div className="projBox">
              <div className="proj-body">
                  <div id="side" className="projSidebar">
                    <div className="userPic">
                      <img className="pic" src={user.userpic} />
                    </div>
                    <div className="proj-name">
                        <Link to={`/users/${user.id}`} className="UserLink">
                          {user.username}
                        </Link>
                    </div>
                    <div className="proj-userpic"></div>
                      <div className="proj-title-cover">
                        <div className="proj-title">{project.title}</div>
                      </div>
                      <div className="proj-description">
                        <div className="description">{project.description}</div>
                      </div>
                    {/*                  likes number                   */}
                    <div className="num-likes">
                      <img src="https://s3.us-east-2.amazonaws.com/clone-app-dev/like_icon.svg" />
                      {this.props.project.liker_ids.length}
                      <img className='smallCommenticon' src='https://s3.us-east-2.amazonaws.com/clone-app-dev/noun_974856_cc.svg' />
                      {project.comment_num}
                    </div>
                    {/*                 APPRECIATE BUTTON                 */}
                    {this.renderOrNot()}
                  </div>


                      <div className="proj-images">
                        {project.imageUrls.map((image, idx) => <ProjectImage
                                                        key={idx}
                                                        image={image} />)}
                      </div>
                      <div>

                        <CommentsContainer projectId={projectId}/>
                      </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ProjectDetail;
