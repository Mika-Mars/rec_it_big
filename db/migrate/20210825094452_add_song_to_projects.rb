class AddSongToProjects < ActiveRecord::Migration[6.0]
  def change
    add_column :projects, :song, :string
  end
end
