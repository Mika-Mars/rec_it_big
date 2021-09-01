class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :destroy]
  skip_before_action :verify_authenticity_token
  def show
    @voice_record = VoiceRecord.new
    @note = Note.new
    @voicerecords = @project.voice_records
  end

  def index
    @disable_nav = true
    @projects = Project.all
    @project = Project.new
  end

  def edit; end

  def create
    @project = Project.new(project_params)
    @note = Note.new(content: "")
    @project.note = @note
    @project.user_id = current_user.id
    if @project.save!
      redirect_to project_path(@project)
    else
      render projects_path
    end
  end

  def update
    @project = Project.find(params[:id])
    @project.update(project_params)
    redirect_to project_path
  end

  def destroy
    @project.destroy
    redirect_to projects_path
  end

  def notes
    @project = Project.find(params[:project_id])
    @project.note.content = params[:note][:content].strip
    @project.note.save!
    redirect_to project_path(@project)
  end


  private

  def set_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:title, :song)
  end
end
