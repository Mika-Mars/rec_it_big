class VoiceRecordsController < ApplicationController
  before_action :set_voice_record, only: [:update]

  def index
    @voice_records = VoiceRecord.all
  end

  def create
    @voice_record = VoiceRecord.new(voice_record_params)
    @project = Project.find(params[:project_id])
    @voice_record.project = @project
    @voice_record.save!
  end

  def update
    @voice_record.enabled = !@voice_record.enabled
    @voice_record.save
    @project = Project.find(params[:project_id])
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
    params.require(:voice_record).permit(:title, :starting_time, :ending_time, :project_id, :voice, :enabled)
  end
end
