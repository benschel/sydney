# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user_list = [
  ['Chris', 'chris-mckay.jpg'],
  ['Dylan', 'dylan-kayser.jpg'],
  ['Mike', 'mike-lucero.jpg'],
  ['Amanda', 'amanda-hitchner.jpg'],
  ['Jackie', 'jackie-masci.jpg'],
  ['Samantha', 'samantha-avillo.jpg'],
  ['Jourdan', 'jourdan-elam.jpg'],
  ['Chris', 'chris-duffy.jpg'],
  ['Kevin', 'kevin-lindberg.jpg'],
  ['Adam', 'adam-fingar.jpg'],
  ['Ryan', 'ryan-brennan.jpg'],
  ['Sean', 'sean-malone.jpg'],
  ['Rodger', 'rodger-salmon.jpg'],
  ['Shayna', 'shayna-harris.jpg'],
  ['Casey', 'casey-ruff.jpg'],
  ['Rebecca', 'rebecca-morris.jpg'],
  ['Lyndsay', 'lyndsay-franklin.jpg'],
  ['Erin', 'erin-berger.jpg'],
  ['Kaitlyn', 'kaitlyn-pratt.jpg'],
  ['Stephanie', 'stephanie-gross.jpg'],
  ['Hannah', 'hannah-lambert.jpg'],
  ['Caroline', 'caroline-marotta.jpg'],
  ['Lauren', 'lauren-sparrow.jpg'],
  ['Maxine', 'maxine-sackey.jpg'],
]

user_list.each do |user|
  User.create(:name => user[0], :photo_url => user[1])
end