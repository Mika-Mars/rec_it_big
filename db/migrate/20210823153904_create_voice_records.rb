class CreateVoiceRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :voice_records do |t|
      t.string :title
      t.integer :starting_time
      t.references :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
