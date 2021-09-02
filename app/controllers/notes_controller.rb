class NotesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def update
    @note = @project.note
    @note.content = params
    @note.save
    redirect_to project_path(@project)
  end
end
