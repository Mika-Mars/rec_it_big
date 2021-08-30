class AddEndingTimeToVoiceRecords < ActiveRecord::Migration[6.0]
  def change
    add_column :voice_records, :ending_time, :integer
  end
end
