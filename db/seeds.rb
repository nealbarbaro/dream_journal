name = "seed"
email = "seed@seed.com"
password = "password"
User.create!(name: name,
             email: email,
             password: password,
             password_confirmation: password)
user = User.find_by_name("seed")
content = "Pinterest bicycle rights before they sold out, deep v organic sriracha selfies Truffaut Bushwick iPhone blue bottle put a bird on it. Street art ethical food truck, you probably haven't heard of them swag beard Bushwick next level wayfarers dreamcatcher freegan pitchfork. Tattooed cornhole asymmetrical, trust fund twee before they sold out irony gastropub messenger bag scenester. Meggings Odd Future squid tattooed Pinterest."
30.times do
  user.posts.create!(content: content)
end
20.times do
  user.posts.create!(content: content,
                     lucid: true)
end
