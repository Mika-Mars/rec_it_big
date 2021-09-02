class VoiceRecordsController < ApplicationController
  def index
    @voice_records = VoiceRecord.all
  end

  def create
    @voice_record = VoiceRecord.new(voice_record_params)
    @project = Project.find(params[:project_id])
    @voice_record.project = @project
    @voice_record.save
    redirect_to projects_path
  end

  def destroy
    @voice_record.destroy
    redirect_to projects_path, notice: "Voice record was successfully delete"
  end

  private

  def set_voice_record
    @voice_record = VoiceRecord.find(params[:id])
  end

  def voice_record_params
    params.require(:voice_record).permit(:title, :starting_time, :ending_time, :project_id, :voice)
  end
end
