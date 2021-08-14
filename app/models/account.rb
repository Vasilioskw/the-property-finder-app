class Account < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable, :confirmable

      has_many :properties
     # has_one_attached :image



    def full_name
          "#{first_name} #{last_name}"
    end

    def company
    end

    def profile_picture
    end

    has_one_attached :image
        # has_one_attached :photo_cache
        
    #     belongs_to :account

end

