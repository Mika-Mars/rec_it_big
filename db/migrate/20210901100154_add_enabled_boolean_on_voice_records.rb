class AddEnabledBooleanOnVoiceRecords < ActiveRecord::Migration[6.0]
  def change
    add_column :voice_records, :enabled, :boolean
  end
end
