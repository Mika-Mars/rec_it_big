class ChangeStartingTimeTypeToVoiceRecords < ActiveRecord::Migration[6.0]
  def change
    change_column :voice_records, :starting_time, :float
  end
end
