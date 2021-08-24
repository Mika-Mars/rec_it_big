class ProjectsController < ApplicationController
    before_action :set_project, only: [:show]

    def show
        @voice_record = VoiceRecord.new
        @note = Note.new
    end

    private

  def set_project
    @project = Project.find(params[:id])
  end

end

