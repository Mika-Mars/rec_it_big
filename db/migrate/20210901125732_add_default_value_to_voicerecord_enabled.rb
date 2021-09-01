class AddDefaultValueToVoicerecordEnabled < ActiveRecord::Migration[6.0]
  def change
    change_column :voice_records, :enabled, :boolean, default: true
  end
end
