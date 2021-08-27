# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
Note.destroy_all
Project.destroy_all
User.destroy_all
u1 = User.create(email: 'lildev@gmail.com', password: "123456")
u1.save!


p1 = Project.create(
  title: "Skusku Project",
  user: u1
)
p1.save!

p2 = Project.create(
  title: "Dans mon bendo",
  user: u1
)

p3 = Project.create(
  title: "Project Blue Beam",
  user: u1
)

p4 = Project.create(
  title: "Mélancolique",
  user: u1
)

p5 = Project.create(
  title: "Mon bebew",
  user: u1
)

p6 = Project.create(
  title: "La tete dans les nuages",
  user: u1
)

p7 = Project.create(
  title: "Comme les gens d'ici",
  user: u1
)

Note.create(
  content: "",
  project: p1
)

Note.create(
  content: "",
  project: p2
)

Note.create(
  content: "",
  project: p3
)

Note.create(
  content: "",
  project: p4
)

Note.create(
  content: "",
  project: p5
)

Note.create(
  content: "",
  project: p6
)

Note.create(
  content: "",
  project: p7
)


p "#{Project.count} project have been created"
