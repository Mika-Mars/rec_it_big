class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def create
    @project = Project.new(project_params)
    @projet.user_id = current_user.id
    if @project.save!
      redirect_to projects_path
    else
      render projects_path
    end

 private

  def project_params
    params.require(:project).permit(:title)
  end
end
