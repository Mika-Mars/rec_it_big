class CreateTexts < ActiveRecord::Migration[6.0]
  def change
    create_table :texts do |t|
      t.text :content
      t.references :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
