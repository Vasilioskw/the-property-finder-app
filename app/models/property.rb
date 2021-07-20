class Property < ApplicationRecord
    # mount_uploader :photo, PhotoUploader
    has_one_attached :photo
    # has_one_attached :photo_cache
    
    belongs_to :account

self

    scope :latest, -> { order created_at: :desc }

end
