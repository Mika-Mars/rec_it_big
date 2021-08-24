# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.create(email: 'lildev@gmail.com', password: "123456")

Project.destroy_all
5.times do
    project = Project.new(
      title: Faker::Cannabis.cannabinoid,
      user_id: 1,
    )
    project.save!
  end

  count = Project.count
  p "#{count} project have been created"