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



@user = User.create!(
username: 'Test',
email: 'test@test1.com',
password: '123457'
)

puts "#{User.count} users created"


@testcustom = Custom.create!(

  name: 'TEST CUSTOM', 
  rocker: 2.3,
  height: 6.3,
  volume: 20.3,
  tail_width: 3.6,
  image_url: 'https://res.cloudinary.com/dhkeoqhmp/image/upload/v1633389075/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/customboard_bv4cbn.png',
  user: @user
)


puts "#{Custom.count} customs created"

@hydratop = Surfboard.create!(
  name: 'Hydra Top', 
  description: 'The HYDRA TOP_Grom is fun for kids transitioning from soft tops or oversized every level boards, but still struggling to consistently control and perform on a full HP Shortboard. It’s also become a very functional “grovel” board for some of our elite level kids. In areas plagued with consistently minuscule waves, the UberGrom is better choice for even higher level rippers. Meant to be ridden at the kids same hight, for modest skill level, gradually becoming shorter as the groms skills and hight grows.',
  dimensions: 6.3,
  price: 795.00,
  image_url: 'https://res.cloudinary.com/dhkeoqhmp/image/upload/v1633117802/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/hydra-top-bot_pr5t1m.png'
)


@prs = Surfboard.create!(
  name: 'PRS', 
  description: 'The PRS is the continuing evolution of our most proven and popular Pro-formance Shortboard. Designed through direct feedback and ongoing refinement with rigorous testing from our pinnacle team riders, specifically Kolohe Andino and Griffin Colapinto, as well as Carissa Moore and young Caroline Marks. The PRS is a direct reflection of what our team has pushed us to create, to keep up with their pinnacle performance surfing demands..',
  dimensions: 5.8,
#  '6’6	     17.00	     3.05	     17.00
#   6’7	     17.13	     3.08	     17.75
#   6’3	     17.25	     3.13	     18.50
#   6’9	     17.38	     3.15	     19.25
#   10’10	   17.50	     3.18	     20.00',
  price: 895.00,
  
  image_url: 'https://res.cloudinary.com/dhkeoqhmp/image/upload/v1633117802/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/PRS_u6htwj.png'
)

@rnf = Surfboard.create!(
  name: 'RNF', 
  description: 'RNF is the latest iteration in the continuing evolution of our most user friendly, pro-formance shortboard. Developed in the soft peeling points of San Clemente, it loves small to average surf and really does well in connecting the dots in mushy points, or weak, broken up beach breaks. A surfboard developed for competitors in sub-par surf, that actually transitions perfectly to everyday surfers...',
  dimensions: 6.13,
  image_url: 'https://res.cloudinary.com/dhkeoqhmp/image/upload/v1633117802/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/RNF_emslhk.png'
)

@pig = Surfboard.create!(
  name: 'PIG', 
  description: 'PIG  is a chopped down, volume-up spin off of the popular Crowd Killer, with a nod to the stylish Smooth Operator, but without forgetting the performance and maneuverability of our shorter hybrids like the Puddle Jumper series, thus furthering our adventures into the ego free fun of Mid-length Mayhem..',
  dimensions:7.3,
  price: 995.00,
  image_url: 'https://res.cloudinary.com/dhkeoqhmp/image/upload/v1633117802/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/Pig-surfboard_s8hs6c.png'
)






  