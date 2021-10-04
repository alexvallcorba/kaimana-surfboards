# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Custom.destroy_all
Surfboard.destroy_all
User.destroy_all


@hydratop = Surfboard.create!(
  name: 'Hydra Top', 
  description: 'The HYDRA TOP_Grom is fun for kids transitioning from soft tops or oversized every level boards, but still struggling to consistently control and perform on a full HP Shortboard. It’s also become a very functional “grovel” board for some of our elite level kids. In areas plagued with consistently minuscule waves, the UberGrom is better choice for even higher level rippers. Meant to be ridden at the kids same hight, for modest skill level, gradually becoming shorter as the groms skills and hight grows.'
,
)
