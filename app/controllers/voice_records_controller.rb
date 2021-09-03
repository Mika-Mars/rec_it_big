class VoiceRecordsController < ApplicationController
  before_action :set_voice_record, only: [:update]

  def index
    @voice_records = VoiceRecord.all
  end

  def create
    @voice_record = VoiceRecord.new(voice_record_params)
    @project = Project.find(params[:project_id])
    @voice_record.project = @project
    @voice_record.save
    respond_to do |format|
      format.html { redirect_to projects_path }
      format.json
    end
  end

  def update
    @voice_record.enabled = !@voice_record.enabled
    @voice_record.save
    @project = Project.find(params[:project_id])
    respond_to do |format|
      format.json
    end
  end

  def destroy
    @voice_record = VoiceRecord.find(params[:id])
    @voice_record.destroy
    redirect_to @voice_record.project
  end

  private

  def set_voice_record
    @voice_record = VoiceRecord.find(params[:id])
  end

  def voice_record_params
    params.require(:voice_record).permit(:title, :starting_time, :ending_time, :project_id, :voice, :enabled)
  end
end
