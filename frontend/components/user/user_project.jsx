import React from 'react';
import UserProjectContainer from './user_project_container';
import ProjectItem from '../project/project_item';

class UserProject extends React.Component {

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
    this.props.requestAllProjects();
  }


  componentWillReceiveProps(nextProps){
    if (this.props.match.params.userId !== nextProps.match.params.userId){
     this.props.fetchUser(nextProps.match.params.userId);
     this.props.requestAllProjects();
   }
 }


  render() {
    if(this.props.user.projects === undefined || this.props.user.projects.length === 0){
      return null;
    } else if (Object.keys(this.props.allProjects).length === 0){
      return null;
    }
    const { allProjects, projects, user } = this.props;
    return (
      <div>
        <div className="profile-body-box">
          <div className="profile-body-content-box">
            {/*   __________      MODAL  __________            __________*/}


            { projects.map(project => <ProjectItem
                                  key={project.id}
                                  project={allProjects[project.id]}
                                  user={user}
                                  projectId={project.id}
                                  requestComments={this.props.requestComments}
                                  images={allProjects[project.id].imageUrls}
                                  currentUser={this.props.currentUser}/> )}


            {/*   __________      MODAL  __________            __________*/}
          </div>
        </div>
      </div>
    )
  }
}

export default UserProject;