class VoiceRecordsController < ApplicationController
 def index
    @voice_records = VoiceRecord.all
 end

 def create
    @voice_record = VoiceRecord.new(voice_record_params)
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
        params.require(:voice_record).permit(:title, :starting_time, :project_id)
    end

end
