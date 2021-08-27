# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
User.destroy_all
User.create(email: 'lildev@gmail.com', password: "123456")

Project.destroy_all
Notes.destroy_all


p1 = Project.create(
  title: "Skusku Project",
  user_id: 1
)

p2 = Project.create(
  title: "Dans mon bendo",
  user_id: 1
)

p3 = Project.create(
  title: "Project Blue Beam",
  user_id: 1
)

p4 = Project.create(
  title: "Mélancolique",
  user_id: 1
)

p5 = Project.create(
  title: "Mon bebew",
  user_id: 1
)

p6 = Project.create(
  title: "La tete dans les nuages",
  user_id: 1
)

p7 = Project.create(
  title: "Comme les gens d'ici",
  user_id: 1
)

Note.new(
  content: "",
  project_id: p1.id
)

Note.new(
  content: "",
  project_id: p2.id
)

Note.new(
  content: "",
  project_id: p3.id
)

Note.new(
  content: "",
  project_id: p4.id
)

Note.new(
  content: "",
  project_id: p5.id
)

Note.new(
  content: "",
  project_id: p6.id
)

Note.new(
  content: "",
  project_id: p7.id
)


p "#{Project.count} project have been created"
