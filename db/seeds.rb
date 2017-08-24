# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all

a = User.create!(username: 'Martin', password: "password", email: "mail@mail.com", about: "Just a simple demo User")
b = User.create!(username: 'John', password: "password", email: "mail@mail.com", about: "Just a second demo User")
c = User.create!(username: 'Billy', password: "password", email: "mail@mail.com", about: "Just a third demo User")
d = User.create!(username: 'Sam', password: "password", email: "mail@mail.com", about: "Just a fourth demo User")
e = User.create!(username: 'Dan', password: "password", email: "mail@mail.com", about: "Just a fifth demo User")
f = User.create!(username: 'Martin2', password: "password", email: "mail@mail.com", about: "Just a sixth demo User")

Project.delete_all

pr1 = Project.create!(user_id: a.id, title: 'first project', description: 'project description created for testing purposes only')
pr1 = Project.create!(user_id: a.id, title: 'second project', description: 'project wih a slightly different description created for testing purposes only')
