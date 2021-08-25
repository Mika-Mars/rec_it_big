class ProjectsController < ApplicationController
  before_action :set_project, only: [:show]

  def show
    @voice_record = VoiceRecord.new
    @note = Note.new
  end

  def index
    @disable_nav = true
    @projects = Project.all
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    @project.user_id = current_user.id
    if @project.save!
      redirect_to project_path(@project)
    else
      render projects_path
    end
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:title)
  end
end
