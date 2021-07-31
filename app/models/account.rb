class Account < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable, :confirmable

  has_many :properties



       def full_name
              "#{first_name} #{last_name}"
        end

       def company
       end

has_one_attached :profile_picture
    # has_one_attached :photo_cache
    
    belongs_to :account

end

