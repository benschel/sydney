# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user_list = [
  ['Ben', 'ben.jpg'],
  ['Jeff', 'jeff-g.jpg'],
  ['Brian', 'brian.jpg'],
  ['Brandon', 'brandon.jpg'],
  ['Jeff', 'jeff-mu.jpg'],
  ['Chris', 'chris.jpg'],
  ['Dave', 'dave-alter.jpg'],
  ['Johnny', 'johnny.jpg'],
  ['Kelly', 'kelly.jpg'],
  ['Alex', 'alex.jpg'],
  ['Collin', 'collin.jpg'],
  ['Jeronimo', 'jeronimo.jpg'],
  ['Andy', 'andy.jpg'],
  ['Jamie', 'jamie.jpg'],
  ['Dave', 'dave-p.jpg'],
  ['Gideon', 'gideon.jpg'],
  ['Mike', 'mike.jpg'],
  ['Stanley', 'stanley.jpg'],
  ['Joel', 'joel.jpg'],
  ['Micky', 'micky.jpg'],
  ['Tristan', 'tristan.jpg'],
]

user_list.each do |user|
  User.create(:name => user[0], :photo_url => user[1])
end