class ChangeEndingTimeTypeToVoiceRecords < ActiveRecord::Migration[6.0]
  def change
    change_column :voice_records, :ending_time, :float
  end
end
