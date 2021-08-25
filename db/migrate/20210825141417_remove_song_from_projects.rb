class RemoveSongFromProjects < ActiveRecord::Migration[6.0]
  def change
    remove_column :projects, :song, :string
  end
end
