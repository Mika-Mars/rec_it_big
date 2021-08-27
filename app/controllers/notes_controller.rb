class NotesController < ApplicationController

  def update
    @note = @project.note
    @note.content = params
    @note.save!
    redirect_to project_path(@project)
  end

end
