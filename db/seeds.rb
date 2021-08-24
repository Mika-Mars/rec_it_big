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

Project.create(
  title: "Skusku Project",
  user_id: 1
)

Project.create(
  title: "Dans mon bendo",
  user_id: 1
)

Project.create(
  title: "Project Blue Beam",
  user_id: 1
)

Project.create(
  title: "Mélancolique",
  user_id: 1
)

5.times do
  project = Project.new(
    title: Faker::ChuckNorris.fact,
    user_id: 1
  )
  project.save!
end

p "#{Project.count} project have been created"
