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
      redirect_to projects_path
    else
      render projects_path
    end
  end

  def update
    @project = Project.find(params[:id])
    @project.update(project_params)
    redirect_to project_path
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:title, :song)
  end
end
